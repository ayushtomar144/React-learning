export default function Activity1({ username, textColor }) {
    let styles = { color: textColor };

    return (
        <h1 style={styles}>
            Hello, {username}
        </h1>
    );
}