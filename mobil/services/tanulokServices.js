// File: tanulokServices.js
// Author: Meggyesi Réka
// Copyright: 2024, Meggyesi Réka
// Group: Szoft II/1/E
// Date: 2024-04-07
// Github: https://github.com/meggyesireka/


const host = 'http://localhost:8000/';
const endpoint = 'tanulok';

export async function lekerTanulok(){
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}