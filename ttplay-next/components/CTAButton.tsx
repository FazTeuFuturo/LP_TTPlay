import Link from 'next/link';

interface CTAButtonProps {
    variant?: 'primary' | 'secondary';
    href?: string;
    external?: boolean;
    children: React.ReactNode;
}

export default function CTAButton({
    variant = 'primary',
    href = '/',
    external = false,
    children,
}: CTAButtonProps) {
    const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

    if (external) {
        return (
            <a href={href} className={className} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}
