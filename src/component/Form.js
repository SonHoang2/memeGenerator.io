import {useState ,useEffect } from "react"

export default function Form() {
    const [allMemes, setAllMemes] = useState()

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
<<<<<<< HEAD
        randomImage: "https://i.imgflip.com/1ur9b0.jpg"
=======
        randomImage: ""
>>>>>>> a568fed (done)
    })

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function randomMeme() {
        const randomNumber = Math.floor(Math.random() * 100);
<<<<<<< HEAD
        return allMemes[randomNumber].url
=======
        setMeme(prev => ({
            ...prev,
            randomImage: allMemes[randomNumber].url
        }))
>>>>>>> a568fed (done)
    }

    return (
        <div className="main">
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text field" 
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text field" 
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                />
                <input 
                    type="button" 
                    value="Get a new meme image" 
                    className="form--button"
                    onClick={randomMeme}
                />
            </div>
            <div className="meme">
<<<<<<< HEAD
                <h1 className="meme--text top">{meme.topText} hello</h1>
                <img className="meme--img" src={meme.randomImage}  />
                <h1 className="meme--text bottom">{meme.bottomText} hello</h1>
=======
                <h1 className="meme--text top">{meme.topText}</h1>
                {meme.randomImage && <img className="meme--img" src={meme.randomImage}/>}
                <h1 className="meme--text bottom">{meme.bottomText}</h1>
>>>>>>> a568fed (done)
            </div>
        </div>
    )
}