// Load in Json file 
fetch("info.json")
  .then(response => response.json())
  .then(json => {

    // Attach loaded in object to variable "birds"
    const info = json

    // Function for updating the mapview when a region is selected
    function regionSelect(region) {
      
      // Clear all elements from the infowindow div
      document.querySelector('#infowindow').innerHTML = ""
      
      // Find the countries for the selected region and create buttons for them 
      info.Countries.forEach(element => {
        let newbutton = document.createElement('button')
        var Name = element.Name
        newbutton.innerHTML = Name
        newbutton.id = Name
        newbutton.style.width = "33vw"
        newbutton.style.height = "10vh"
        document.querySelector('#infowindow').append(newbutton)
      })
    }
    
    // Function for displaying all bird options when no specific species is selected 
    function setInitialView(info) {
      
      // Clear all elements from the infowindow div
      document.querySelector('#infowindow').innerHTML = ""
      
      // Creates New Button for each Region 
      info.Regions.forEach(element => {
      let newbutton = document.createElement('button')
      var Name = element.Name
      newbutton.innerHTML = Name
      newbutton.id = Name
      newbutton.style.width = "33vw"
      newbutton.style.height = "25vh"
      document.querySelector('#infowindow').append(newbutton)

      // Adapt this to add in button selection method  
      document.getElementById(element.Name).addEventListener('click', () => {
        RegionSelect(Name)
        
      })
      }
     // Set Intial View
      setInitialView(info);
    })






