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
      
      // Clear the infowindow div
      document.querySelector('#infowindow').innerHTML = ""

      // Create back button first
      let backbutton = document.createElement('button')
      var Name = "Back"
      newbutton.innerHTML = Name
      newbutton.id = Name
      newbutton.style.width = "33vw"
      newbutton.style.height = "10vh"
      document.querySelector('#infowindow').append(newbutton)

      document.getElementById(Name).addEventListener('click', () => {
      initialview();
      })
      
      
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

        // Set On Click Event for Buttons 

        })
      
      //Update Map Centre and Visible Layers 
      
      document.querySelector("arcgis-map").center = location.centre
      document.querySelector("arcgis-map").zoom = location.zoom
      } 
    
    // Function for displaying all regions
    function regionView(info) {
      
      console.log("Erasing infowindow")
      document.querySelector('#infowindow').innerHTML = ""
      
      
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

      // Set On Click Event for Buttons 
      console.log("Adding on click event")
      document.getElementById(element.Name).addEventListener('click', () => {
        regionSelect(Name);
        
      })
      })
    }

    // Set Intial View
    async function initalView() {

      // Set a loading message
      console.log("Setting Initial View")
      let loadingMessage = document.createElement('h3')
      loadingMessage.innerHTML = "Application Loading"
      document.querySelector('#infowindow').append(loadingMessage)

      // Await Map Ready
      console.log("Awaiting Map Load")
      const viewElement = document.querySelector("arcgis-map");
      viewElement.addEventListener("arcgisViewReadyChange", async (event) => {
        regionView(info);
      })
    }

    initalView();

  }
  )




