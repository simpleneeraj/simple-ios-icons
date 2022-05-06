

export interface CardProps {
    path: string;
    heading: string;
    description: string;
}

interface IconsProps {
    icons: FilesArrayTypes[];
}
interface FilesArrayTypes {
    // id: number;
    name: string;
    iconPath: string;
}