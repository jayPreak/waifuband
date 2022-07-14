var goku = new Audio('sounds/0.mp3')
var zerotwo = new Audio('sounds/1.mp3')
var kaguya = new Audio('sounds/2.mp3')
var yumeko = new Audio('sounds/3.mp3')
var hori = new Audio('sounds/4.mp3')
var marin = new Audio('sounds/5.mp3')
var mai = new Audio('sounds/6.mp3')
var jinx = new Audio('sounds/7.mp3')

document.addEventListener("keypress", function(e) {
    makesound(e.key)
})

var numdrum = document.querySelectorAll(".drum").length

for (var i = 0; i < numdrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var btninner = this.innerHTML

        makesound(btninner)
    })

}

function makesound(key) {
    switch (key) {
        case "w":
            goku.pause()
            zerotwo.pause()
            kaguya.pause()
            yumeko.pause()
            hori.pause()
            marin.pause()
            mai.pause()
            jinx.pause()

            goku.currentTime = 0
            zerotwo.currentTime = 0
            kaguya.currentTime = 0
            yumeko.currentTime = 0
            hori.currentTime = 0
            marin.currentTime = 0
            mai.currentTime = 0
            jinx.currentTime = 0

            goku.play()
            
            break
            
        case "a":
            goku.pause()
            zerotwo.pause()
            kaguya.pause()
            yumeko.pause()
            hori.pause()
            marin.pause()
            mai.pause()
            jinx.pause()

            goku.currentTime = 0
            zerotwo.currentTime = 0
            kaguya.currentTime = 0
            yumeko.currentTime = 0
            hori.currentTime = 0
            marin.currentTime = 0
            mai.currentTime = 0
            jinx.currentTime = 0
            
            zerotwo.play()
            break
        case "s":
            goku.pause()
            zerotwo.pause()
            kaguya.pause()
            yumeko.pause()
            hori.pause()
            marin.pause()
            mai.pause()
            jinx.pause()

            goku.currentTime = 0
            zerotwo.currentTime = 0
            kaguya.currentTime = 0
            yumeko.currentTime = 0
            hori.currentTime = 0
            marin.currentTime = 0
            mai.currentTime = 0
            jinx.currentTime = 0
            
            kaguya.play()
            break
        case "d":
            goku.pause()
            zerotwo.pause()
            kaguya.pause()
            yumeko.pause()
            hori.pause()
            marin.pause()
            mai.pause()
            jinx.pause()

            goku.currentTime = 0
            zerotwo.currentTime = 0
            kaguya.currentTime = 0
            yumeko.currentTime = 0
            hori.currentTime = 0
            marin.currentTime = 0
            mai.currentTime = 0
            jinx.currentTime = 0
            
            yumeko.play()
            break
        case "i":
            goku.pause()
            zerotwo.pause()
            kaguya.pause()
            yumeko.pause()
            hori.pause()
            marin.pause()
            mai.pause()
            jinx.pause()

            goku.currentTime = 0
            zerotwo.currentTime = 0
            kaguya.currentTime = 0
            yumeko.currentTime = 0
            hori.currentTime = 0
            marin.currentTime = 0
            mai.currentTime = 0
            jinx.currentTime = 0
            
            hori.play()
            break
        case "j":
            goku.pause()
            zerotwo.pause()
            kaguya.pause()
            yumeko.pause()
            hori.pause()
            marin.pause()
            mai.pause()
            jinx.pause()

            goku.currentTime = 0
            zerotwo.currentTime = 0
            kaguya.currentTime = 0
            yumeko.currentTime = 0
            hori.currentTime = 0
            marin.currentTime = 0
            mai.currentTime = 0
            jinx.currentTime = 0
            
            marin.play()
            break
        case "k":
            goku.pause()
            zerotwo.pause()
            kaguya.pause()
            yumeko.pause()
            hori.pause()
            marin.pause()
            mai.pause()
            jinx.pause()

            goku.currentTime = 0
            zerotwo.currentTime = 0
            kaguya.currentTime = 0
            yumeko.currentTime = 0
            hori.currentTime = 0
            marin.currentTime = 0
            mai.currentTime = 0
            jinx.currentTime = 0
            
            mai.play()
            break
        case "l":
            goku.pause()
            zerotwo.pause()
            kaguya.pause()
            yumeko.pause()
            hori.pause()
            marin.pause()
            mai.pause()
            jinx.pause()

            goku.currentTime = 0
            zerotwo.currentTime = 0
            kaguya.currentTime = 0
            yumeko.currentTime = 0
            hori.currentTime = 0
            marin.currentTime = 0
            mai.currentTime = 0
            jinx.currentTime = 0
            
            jinx.play()
            break
        
        default:
            goku.pause()
            zerotwo.pause()
            kaguya.pause()
            yumeko.pause()
            hori.pause()
            marin.pause()
            mai.pause()
            jinx.pause()

            goku.currentTime = 0
            zerotwo.currentTime = 0
            kaguya.currentTime = 0
            yumeko.currentTime = 0
            hori.currentTime = 0
            marin.currentTime = 0
            mai.currentTime = 0
            jinx.currentTime = 0
            
            break

        
    }
}



