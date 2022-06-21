import images from '/gallery.json' assert  {type: 'json'}


const galleryDisplay = () => {
    const gallery = document.querySelector('.gallery')
    const tag = document.querySelectorAll('.tag')
    
    images.forEach((item) => {

        const galleryItem = document.createElement('div')
        galleryItem.classList.add('gallery-item')
        galleryItem.classList.add('show')
        const galleryImage = document.createElement('img')

        galleryImage.src = item.image
        galleryItem.setAttribute("data-name", item.tag)

        const filterItem = galleryItem.getAttribute('data-name')
        
        gallery.appendChild(galleryItem)
        galleryItem.appendChild(galleryImage)
       
        tag.forEach((btn) => {   
            btn.addEventListener('click', () => {
                tag.forEach((e) => { e.classList.remove('active')})
                btn.classList.add('active')

                const filterName = btn.getAttribute('data-name') 
                if (filterName != filterItem && filterName != 'all') {
                    galleryItem.classList.remove('show')
                    galleryItem.classList.add('hide')
                } else {
                    galleryItem.classList.add('show')
                    galleryItem.classList.remove('hide')
                }
            })
        })
    })
}



galleryDisplay()