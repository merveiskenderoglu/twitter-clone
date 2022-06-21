const Container = (props) => {
    return(
        <div className="flex max-w-7xl min-h-screen mx-auto">
            {props.children}
        </div>
    )
}

export default Container ;