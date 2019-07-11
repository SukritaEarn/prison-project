const baseURL = 'https://exceed.superposition.pknn.dev'
let door_status =''
let door_button_status = ''
let buzzer_status = ''
let light_status = 'off'
let light_button_status = ''
const check_status = () =>{fetch(baseURL + '/data/pepsitrophy')
                            .then((res) => res.json())
                            .then((data)=>{
                                door_status = data['door']
                                light_status = data['light']
                                buzzer_status = data['buzzer']
                                if (door_status == 'off') door_button_status = 'on'
                                else door_button_status = 'off'
                                if (light_status == 'off') light_button_status = 'on'
                                else light_button_status = 'off'   
                                document.getElementById('power_door').innerText = door_status
                                document.getElementById('power_light').innerText = light_status
                                document.getElementById('power_buzzer').innerText = buzzer_status
                                document.getElementById('door').innerText = door_button_status
                                document.getElementById('light').innerText = light_button_status
                                document.getElementById('buzzer').innerText = 'off'
                            })
                            
}

setInterval(check_status,1000)
const check_status_console = () =>{fetch(baseURL + '/data/pepsitrophy')
                            .then((res) => res.json())
                            .then((data)=>{
                                console.log(data)
                            })
                            
}


const door_click = () =>{
    fetch(baseURL + '/data/pepsitrophy/door',{
        method: "PUT",
        body: JSON.stringify({
            "value": door_button_status
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((data)=> console.log(data)).catch((err)=> console.log(err))
    check_status_console()
}

const light_click = () =>{
    console.log('hola')
    fetch(baseURL + '/data/pepsitrophy/light',{
        method: "PUT",
        body: JSON.stringify({
            "value": light_button_status
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((data)=> console.log(data)).catch((err)=> console.log(err))
    console.log('hola')
    check_status_console()
}

const buzzer_click = () =>{
    fetch(baseURL + '/data/pepsitrophy/buzzer',{
        method: "PUT",
        body: JSON.stringify({
            "value": "off"
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((data)=> console.log(data)).catch((err)=> console.log(err))
    check_status_console()
}