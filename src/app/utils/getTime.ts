interface TimeResponse {
    year: number
    month: number
    day: number
    hour: number
    minute: number
    seconds: number
    milliSeconds: number
    dateTime: string
    date: string
    time: string
    timeZone: string
    dayOfWeek: string
    dstActive: boolean
  }
  

export const getTime = async (timeZone: string) : Promise<TimeResponse> => {
    const res 
    = await fetch(
        `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
        {next: {tags: ['time']}}
    );
    
    return res.json();
}