interface TitleProps {
    title: string;
    subtitle?: string;
}

const Title = ({ title, subtitle}: TitleProps) => {
    return (
        <div className="pt-8 pb-5.25">
            <h1>{title}</h1>
            {subtitle && <h2 className="mt-2 text-sm font-medium">{subtitle}</h2>}
        </div>
    );
}

export default Title;
