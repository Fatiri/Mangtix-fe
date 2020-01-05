import Swal from "sweetalert2";
import {serverAddress} from "../../../server/ServerConstant";

export async function saveDataTicket(event) {
    const data = await fetch(`${serverAddress}/ticket`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(event)
    });

    if (data.status === 200) {
        await Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data has been saved',
            showConfirmButton: false,
            timer: 3000
        })

        return await data.json();
    } else if (data.status === 500) {
        await Swal.fire({
            icon: 'error',
            title: 'Sorry!!!',
            timer: 3000
        });
        return null;
    }
}

export async function updateDataTicket(event) {
    const data = await fetch(`${serverAddress}/ticket`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(event)
    });

    if (data.status === 200) {
        await Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data has been saved',
            showConfirmButton: false,
            timer: 3000
        })

        return await data.json();
    } else if (data.status === 500) {
        await Swal.fire({
            icon: 'error',
            title: 'Sorry!!!',
            timer: 3000
        });
        return null;
    }
}

export async function fetchDataTicket() {
    const data=await fetch(`${serverAddress}/tickets`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function fetchDataTicketById(id) {
    const data=await fetch(`${serverAddress}/ticket/${id}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
export async function fetchDataListTicketByEventDetail(eventDetailId) {
    const data=await fetch(`${serverAddress}/ticket-list?eventDetailId=${eventDetailId}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}

export async function fetchDataTicketByCategory(event) {
    const data=await fetch(`${serverAddress}/tickets-category?${event}`,
        {method:"GET"}).then((response)=>{
        return response.json()
    });
    console.log(data);
    return data;
}
