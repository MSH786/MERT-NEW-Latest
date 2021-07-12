export const createToken = (params) => {
    const jsonBody = {
        "customerId": params.customerId,
    }

    return jsonBody
}

export const refreshToken = (params) => {
    const jsonBody = {
        "customerId": params.customerId,
        "refreshToken": params.refreshToken,
    }

    return jsonBody
}

export const loginWithEmail = (params) => {
    const jsonBody = {
        "email": params.email,
        "password": params.password,
    }

    return jsonBody
}

export const getMainCategories = (params) => {
    const getUrl =
        "skip=" + params.skip + "&" +
        "take=" + params.take;

    return `?${getUrl}`
}

