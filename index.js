// Load in Json file 
fetch("info.json")
  .then(response => response.json())
  .then(json => {

    console.log("Loaded in JSON file")
    
    // Attach loaded in object to variable "info"
    const info = json
    console.log("Set JSON Details")

    // Function for updating the mapview when a region is selected
    function regionSelect(region) {
      
      // Clear all elements from the infowindow div
      document.querySelector('#infowindow').innerHTML = ""
      
      // Find the countries for the selected region and create buttons for them 
      let location = info.Regions.find(item => item.Name === region);
      console.log("location is ", location)
      location.Countries.forEach(element => {
        let newbutton = document.createElement('button')
        var Name = element.Name
        newbutton.innerHTML = Name
        newbutton.id = Name
        newbutton.style.width = "33vw"
        newbutton.style.height = "10vh"
        document.querySelector('#infowindow').append(newbutton)
      })
    }
    
    // Function for displaying all regions
    function regionView(info) {
      
      // Check if there in anything in the infowindow, if so clear
      if (document.querySelector('#infowindow').innerHTML != "")
      {
        console.log("Erasing infowindow")
        document.querySelector('#infowindow').innerHTML = ""
      }
      
      // Creates New Button for each Region 
      info.Regions.forEach(element => {
      console.log("Creating Region Button")
      let newbutton = document.createElement('button')
      var Name = element.Name
      newbutton.innerHTML = Name
      newbutton.id = Name
      newbutton.style.width = "33vw"
      newbutton.style.height = "25vh"
      document.querySelector('#infowindow').append(newbutton)

      // Adapt this to add in button selection method  
      console.log("Adding on click event")
      document.getElementById(element.Name).addEventListener('click', () => {
        regionSelect(Name);
        
      })
      })
    }
    // Set Intial View
      console.log("Setting Initial View")
      regionView(info);
  }
  )




