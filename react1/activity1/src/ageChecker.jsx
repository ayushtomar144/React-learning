export default function AgeChecker({ age }) {
    return (
        <>
            {age >= 18 ? <p>Adult</p> : <p>Minor</p>}
        </>
    );
}