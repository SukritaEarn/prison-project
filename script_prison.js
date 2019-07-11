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
                                console.log(door_status)
                                if (door_status == 'off') door_button_status = 'on'
                                else door_button_status = 'off'
                                if (light_status == 'off') light_button_status = 'on'
                                else light_button_status = 'off'   
                            })
                            
}

//setInterval(check_status,1000)

const door_click = () =>{
    fetch(baseURL + 'data/pepsitrophy/door',{
        method: "PUT",
        body: JSON.stringify({
            "value": door_button_status
        }),
        headers:{
            "Content-Type":"application/json"
        }.then((data)=> console.log(data)).catch((err)=> console.log(err))
    })
}

const light_click = () =>{
    fetch(baseURL + 'data/pepsitrophy/light',{
        method: "PUT",
        body: JSON.stringify({
            "value": light_button_status
        }),
        headers:{
            "Content-Type":"application/json"
        }.then((data)=> console.log(data)).catch((err)=> console.log(err))
    })
}

const buzzer_click = () =>{
    fetch(baseURL + 'data/pepsitrophy/buzzer',{
        method: "PUT",
        body: JSON.stringify({
            "value": "off"
        }),
        headers:{
            "Content-Type":"application/json"
        }.then((data)=> console.log(data)).catch((err)=> console.log(err))
    })
}