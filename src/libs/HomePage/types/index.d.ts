interface HomePage {
    value: string;
    error: number;
    loading: boolean;
    show: boolean;
}

interface Information {
    title: string;
    content: string;
}

interface Data {
    keyword: string;
    translate: string;
    paragraph_english: string;
    paragraph_vietnamese: string;
    phrases: Information[];
}