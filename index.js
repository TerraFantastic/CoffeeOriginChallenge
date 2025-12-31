// Load in Json file 
fetch("info.json")
  .then(response => response.json())
  .then(json => {

    // Attach loaded in object to variable "birds"
    const info = json
    
    // Function for displaying all bird options when no specific species is selected 
    function setInitialView(info) {
      
      // Makes infowindow blank
      document.querySelector('#infowindow').innerHTML = ""

      // Creates New Button for each Region 
      info.Regions.forEach(element => {
      let newbutton = document.createElement('button')
      var Name = element.Name
      newbutton.innerHTML = Name
      newbutton.id = Name
      newbutton.style.width = "100vw"
      newbutton.style.height = "33vh"
      document.querySelector('#infowindow').append(newbutton)

      // Adapt this to add in button selection method  
      // document.getElementById(element.Name).addEventListener('click', () => {
        //showbirdinfo(Name)
        
      })
      })
     }
     // Set Intial View
      setInitialView(info);
    })


