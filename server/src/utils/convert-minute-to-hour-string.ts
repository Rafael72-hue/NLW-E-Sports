export function convertMinutesToHourString (minutes: number) {
    const hours = Math.floor(minutes/60);
    const minutos = minutes % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`
}