"use server"

import { createClient } from "../supabase/server"

export  async function FetchAllServices  () {
    const supabase = await createClient
    const { data: services, error } = await supabase
    .from('services')
    .select('*')

    if(error){
        console.log(error)
        return[];
    }

    return services
}