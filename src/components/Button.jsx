export default function Button({size = "medium", type="primary", contentType="text", text=""}) {
    function getClassName() {
        let classList = []
        if(size === "medium") classList.push("button-md") 
        if(size === "large")  classList.push("button-lg")
        if(size === "xl")  classList.push("button-xl")
        if(size === "xxl")  classList.push("button-xxl")
        
        if(type === "primary") classList.push("primary")
        if(type === "secondary") classList.push("secondary")
        if(type === "tertiary") classList.push("tertiary")
        if(type === "destructive") classList.push("destructive")
        if(type === "link-primary") classList.push("link-primary");
        if(type === "link-secondary") classList.push("link-secondary");
        return classList.join(" ")
    }
    const className = getClassName();
    let btnContent =
                        <>
                            <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
                            </svg>
                        </>
    if(contentType === "text"){
        btnContent = 
                    <>
                        {text}
                    </>
    }

    if(contentType === "image-text"){
        btnContent = 
                     <>
                        <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
                        </svg>
                        {text}
                    </>
    }
    if(contentType === "text-image"){
        btnContent =  
                    <>
                        {text}
                        <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
                        </svg>
                    </>
    }
                           
    return (
        <>
            <button 
                className={ className }
                aria-label= {`Button for ${text || "CTA"}`}
                >
                { btnContent }
            </button>
        </>
    )
}
