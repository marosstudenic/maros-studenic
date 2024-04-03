import querystring from 'querystring';
// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'




const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const getAccessToken = async () => {
    //Creates a base64 code of client_id:client_secret as required by the API
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    //The response will contain the access token
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        return data.access_token;
    } else {
        throw new Error('Failed to get access token');
    }

};


type PlayingResponse = {
    item: {
        album: {
            images: {
                url: string;
            }[];
            name: string;
            artists: {
                name: string;
            }[];
            external_urls: {
                spotify: string;
            }
        };
        name: string;

    };
}
export type MySongType = {
    name: string;
    picture: string;
    external_url: string,
    artist_name: string
}

const retrieveDataFromResponse = async (response: Response): Promise<MySongType | null> => {
    if (response.ok) {
        const data: PlayingResponse = await response.json();
        const album = data.item.album;
        const name = data.item.name;
        const picture = album.images[1].url;
        const external_url = album.external_urls.spotify;
        const artist_name = album.artists[0].name;

        return {
            name, picture, external_url, artist_name
        }

        // Rest of the code...

    } else {
        throw new Error('Failed to get current song');
    }
}

export async function GET(request: Request) {
    // const accessToken = await getAccessAuthorizedToken();

    const accessToken = await getAccessToken();

    console.log(accessToken, "accessToken");

    // get current song
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (response.ok) {
        const title = await retrieveDataFromResponse(response);

        console.log(title);
        return new Response(JSON.stringify(title), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } else {
        throw new Error('Failed to get current song');
    }


}


