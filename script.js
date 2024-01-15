const termsAndCondition = document.getElementById("termsAndCondition");
    const termsAndConditionResult = document.getElementById("termsAndConditionResult")

    termsAndCondition.addEventListener("change", function () {
      if (termsAndCondition.checked) {
        termsAndConditionResult.textContent = `User Agreed to terms`
      } else {
        termsAndConditionResult.textContent = ` `
      }

    })

    const foodItem = document.getElementsByName("food")
    const displayFoodBtn = document.getElementById("displayFoodBtn")
    const foodResult = document.getElementById("foodResult")

    const foods = []
    for (let i = 0; i < foodItem.length; i++) {
      foodItem[i].addEventListener("change", function () {
        foods.length = 0;
        for (let j = 0; j < foodItem.length; j++) {
          if (foodItem[j].checked) {
            foods.push(foodItem[j].value)
          }
        }
      })
    }


    displayFoodBtn.addEventListener("click", function () {
      if (foods.length > 0) {
        foodResult.textContent = `Selected Food Allergies: ${foods.join(", ")}`
      } else {
        foodResult.textContent = `Please select attleast one food allergie`
      }
    })

    const placeName = document.getElementsByName("place")
    const displayPlaceBtn = document.querySelector("#displayPlaceBtn")
    const placeResult = document.querySelector("#placeResult")

    const places = []
    for (let i = 0; i < placeName.length; i++) {
      placeName[i].addEventListener("click", function () {
        places.length = 0
        for (let j = 0; j < placeName.length; j++) {
          if (placeName[j].checked) {
            places.push(placeName[j].value)
          }
        }
      })
    }

    displayPlaceBtn.addEventListener("click", function () {
      if (places.length > 0) {
        placeResult.textContent = `Selected Travel Destination:  ${places.join(", ")}`
      } else {
        placeResult.textContent = `Please select atleast one travel destination`
      }

    })

    const sportName = document.getElementsByName("sport")
    const displaySportBtn = document.getElementById("displaySportBtn")
    const sportResult = document.getElementById("sportResult")

    const sports = []
    for (let i = 0; i < sportName.length; i++) {
      sportName[i].addEventListener("change", function () {
        sports.length = 0
        for (let j = 0; j < sportName.length; j++) {
          if (sportName[j].checked) {
            sports.push(sportName[j].value)
          }
        }
      })
    }

    displaySportBtn.addEventListener("click", function () {
      if (sports.length > 0) {
        sportResult.textContent = `Selected Sports: ${sports.join(", ")}`
      } else {
        sportResult.textContent = `Please select atleast one sports`
      }

    })

    const colorName = document.getElementsByName("color");
    const displayColorsBtn = document.getElementById("displayColorsBtn")
    const colorsResult = document.getElementById("colorsResult")

    const colors = []
    for (let i = 0; i < colorName.length; i++) {
      colorName[i].addEventListener("change", function () {
        colors.length = 0;
        for (let j = 0; j < colorName.length; j++) {
          if (colorName[j].checked) {
            colors.push(colorName[j].value)
          }
        }
      })
    }

    displayColorsBtn.addEventListener("click", function () {
      if (colors.length > 0) {
        colorsResult.textContent = `Selected colours: ${colors.join(", ")}`
      } else {
        colorsResult.textContent = `Please select atleast one colour`
      }
    })


    const mediaName = document.getElementsByName("media")
    const displayMediaBtn = document.getElementById("displayMediaBtn")
    const mediaResult = document.getElementById("mediaResult")

    const socialMedia = []
    for (let i = 0; i < mediaName.length; i++) {
      mediaName[i].addEventListener("change", function () {
        socialMedia.length = 0
        for (let j = 0; j < mediaName.length; j++) {
          if (mediaName[j].checked) {
            socialMedia.push(mediaName[j].value)
          }
        }
      })
    }

    displayMediaBtn.addEventListener("click", function () {
      if (socialMedia.length > 0) {
        mediaResult.textContent = `Selected Social Media: ${socialMedia.join(", ")}`
      } else {
        mediaResult.textContent = "Please select atleast onne social media platform"
      }
    })
