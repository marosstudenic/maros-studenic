import querystring from 'querystring';
// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'




const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
// https://accounts.spotify.com/en/authorize?client_id=de6639a10c114561a57008b21f0075fc&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing

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
        console.log(data, "access token");
        return data.access_token;
    } else {
        throw new Error('Failed to get access token');
    }

};


const getRefreshTokenWithCode = async (code: string) => {
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
            grant_type: 'authorization_code',
            code,
            redirect_uri: 'http://localhost:3000',
        }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data, "access token");
        return data
    } else {
        throw new Error('Failed to get access token');
    }

}


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


    if (response.ok && response.body) {
        const data: PlayingResponse = await response.json();
        console.log(data, "data")
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
        return null;
    }
}

export async function GET(request: Request) {
    // const response = await getRefreshTokenWithCode("AQDZ4mXEBVdAMghFcjUrkO_kl9ObA5WqdPebNULE-qBZrd30lARC0xBSsN9Kd-MBxvwjS0Lh2-e233wAV7HyEH9DYz5CxyZeNBPJR_vwYJmq1X2jl5mx7XsKPgMMAcwtLUs_uR2npWx-fQ3QCZjSF8xeqgTWDI8IZlarSq4IU-53NXiE97hfGiw8Um9kamdgxxOAwyms");
    // console.log(response, "response");

    // return new Response(JSON.stringify(response), {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });

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
        return new Response(JSON.stringify({}), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }


}


