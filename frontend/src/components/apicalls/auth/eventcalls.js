export const getAllEventManagers = (userId, token) => {

    return fetch(`/api/alleventManagers/${userId}`, {
            method: "GET",
            headers: {



                "Authorization": `Bearer ${token}`

            },



        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}

export const createEvent = (data, userId, token) => {

    return fetch(`/api/addEvent/${userId}`, {
            method: "POST",
            headers: {


                Accept: "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: data
        })
        .then(res => {
            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const createDonation = (data, userId, token) => {

    return fetch(`/api/donation/create/${userId}`, {
            method: "POST",
            headers: {


                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify(data)
        })
        .then(res => {
            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}

export const createFood = (data, userId, token) => {
    console.log(userId)
    return fetch(`/api/addFood/${userId}`, {
            method: "POST",
            headers: {


                Accept: "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: data
        })
        .then(res => {
            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const createOxygen = (data, userId, token) => {
    console.log(userId)
    return fetch(`/api/addOxygen/${userId}`, {
            method: "POST",
            headers: {


                Accept: "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: data
        })
        .then(res => {
            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const createMedicine = (data, userId, token) => {


    return fetch(`/api/addMedicine/${userId}`, {
            method: "POST",
            headers: {


                Accept: "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: data
        })
        .then(res => {
            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}

export const bookOxygen = (oxygenId, userId, token) => {

    return fetch(`/api/orderOxygen/${oxygenId}/${userId}`, {
            method: "PUT",
            headers: {

                "Authorization": `Bearer ${token}`

            },
            body: oxygenId

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const bookMedicine = (oxygenId, userId, token) => {

    return fetch(`/api/orderMedicine/${oxygenId}/${userId}`, {
            method: "PUT",
            headers: {

                "Authorization": `Bearer ${token}`

            },
            body: oxygenId

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}

export const getAllEvents = (userId, token) => {

    return fetch(`/api/getEvents/${userId}`, {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}

export const getOxygenById = (id, userId, token) => {

    return fetch(`/api/getOxygenById/${id}/${userId}`, {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .catch(err => {
            console.log(err);
        })

}
export const getMyOxygen = (userId, token) => {

    return fetch(`/api/getMyOxygen/${userId}`, {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .catch(err => {
            console.log(err);
        })

}
export const getMyMedicine = (userId, token) => {

    return fetch(`/api/getMyMedicine/:userId`, {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .catch(err => {
            console.log(err);
        })

}

export const getFoodById = (id, userId, token) => {

    return fetch(`/api/getFoodById/${id}/${userId}`, {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .catch(err => {
            console.log(err);
        })

}
export const getMedicineById = (id, userId, token) => {

    return fetch(`/api/getMedicineById/${id}/${userId}`, {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .catch(err => {
            console.log(err);
        })

}
export const getEventById = (id, userId, token) => {

        return fetch(`/api/getEvent/${id}/${userId}`, {
                method: "GET",
                headers: {

                    "Authorization": `Bearer ${token}`

                },

            })
            .then(res => {

                return res.json()
            })
            .catch(err => {
                console.log(err);
            })

    }
    /////////////////////////////////////////////
export const getAllEventStudents = (userId, token) => {

    return fetch(`/api/allstudents/${userId}`, {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`

            },



        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const getMyOrders = (id, token) => {

    return fetch(`/api/getMyOrders/${id}`, {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const deleteEvents = (id, userId, token) => {
    return fetch(`/api/deleteEvent/${id}/${userId}`, {
            method: "DELETE",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const deleteMedicines = (id, userId, token) => {
    return fetch(`/api/deleteMedicine/${id}/${userId}`, {
            method: "DELETE",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const deleteOxygen = (id, userId, token) => {
    return fetch(`/api//deleteOxygen/${id}/${userId}`, {
            method: "DELETE",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const deleteFood = (id, userId, token) => {
    return fetch(`/api/deleteFood/${id}/${userId}`, {
            method: "DELETE",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}

export const deleteEventManagers = (id, userId, token) => {
    return fetch(`/api/deleteEventManagers/${id}/${userId}`, {
            method: "DELETE",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}

export const getMyStudents = (id, token) => {

    return fetch(`/api/getonlymyStudents/${id}`, {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {


            return res.json()
        })
        .catch(err => {
            console.log(err);
        })

}

export const changeOxygen = (eventId, id, token) => {
    console.log(eventId);
    return fetch(`/api/changeOxygen/${eventId}/${id}`, {
            method: "PUT",
            headers: {

                "Authorization": `Bearer ${token}`

            },
            body: true

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const changeMedicine = (eventId, id, token) => {
    return fetch(`/api/changeMedicine/${eventId}/${id}`, {
            method: "PUT",
            headers: {

                "Authorization": `Bearer ${token}`

            },
            body: true

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}

export const changeFood = (eventId, id, token) => {
    return fetch(`/api/changeFood/${eventId}/${id}`, {
            method: "PUT",
            headers: {

                "Authorization": `Bearer ${token}`

            },
            body: true

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}


export const getMe = (id, token) => {
    return fetch(`/api/getuser/${id}`, {
            method: "GET",
            headers: {

                "Authorization": `Bearer ${token}`

            },

        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}

export const getAllOxygen = (userId, token) => {

    return fetch(`/api/getOxygen/${userId}`, {
            method: "GET",
            headers: {



                "Authorization": `Bearer ${token}`

            },



        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const getAllMedicines = (userId, token) => {

    return fetch(`/api/getMedicine/${userId}`, {
            method: "GET",
            headers: {



                "Authorization": `Bearer ${token}`

            },



        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}
export const getAllFood = (userId, token) => {

    return fetch(`/api/getFood/${userId}`, {
            method: "GET",
            headers: {



                "Authorization": `Bearer ${token}`

            },



        })
        .then(res => {

            return res.json()
        })
        .catch(err => {
            console.log(err);
        })
}