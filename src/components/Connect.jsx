const Connect = () => {
    const borderStyle = {
        border : "1px solid #777776",
        borderRadius: "10px",
        display: "inline-block",
        padding: "10px",
    };

    return (
        <div className="row gap-3 align-content-center" style={{marginLeft: "25%", marginRight: "25%"}}>
            <div className="col-12">
                <h1 className="" style={borderStyle}>Explore my work</h1>
            </div>
            <div className="col-12">
                <h1 style={borderStyle}>Lets Connect</h1>
            </div>
        </div>
    );
};

export default Connect;