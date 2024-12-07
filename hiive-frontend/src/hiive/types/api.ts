interface DateFormat {
    diff: string,
    formatted: string
}

export interface Post {
    id: number;
    title: string;
    description: string;
    inserted_at: DateFormat;
    updated_at: DateFormat;
}
