export default function Wordmark() {
    return (
        <h1 className="hero-wordmark">
            {"OTTONI".split("").map((l, i) => (
                <span key={i} className="letter" style={{ animationDelay: `${0.05 + i * 0.1}s` }}>{l}</span>
            ))}
        </h1>
    );
}