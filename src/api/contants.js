export const APP_VERSION = "1.0"
export const LANG_ID = "T"

export const API_URL = ""

export const API_HEADERS_BEARER_TOKEN = (token) => {
    return {
        'languageId': 1,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }
}

export const API_HEADERS = {
    'languageId': 1,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
