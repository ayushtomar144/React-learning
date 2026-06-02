function printHello(){
    return(
          alert("Hello from button")
    );
}


export default function Button(){
    return(
        <>
        <div>
        <button onClick={printHello}>click me</button>
    </div>
    </>
    )
}