export const numberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatDate = (input: string) => {
    const date = new Date(input.replace(' ', 'T'));

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    };

    return date.toLocaleDateString('en-US', options);
}