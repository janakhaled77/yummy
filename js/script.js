 const BASE_URL = "https://www.themealdb.com";
    let rowData = document.getElementById("rowData");
    let defaultSection = document.getElementById("defaultSection");
    let SearchSection = document.getElementById("SearchSection");
    let contactus = document.getElementById("contactus");


    function OpenNav() {
        $(".nav-tab").animate({ width: '100%' }, 500, function() {
          showListAnimation();
        });
        $(".menu").removeClass("fa-bars").addClass("fa-x");
      }
      
      function CloseNav() {
        $(".nav-tab").animate({ width: '0' }, 500);
        $(".menu").removeClass("fa-x").addClass("fa-bars");
      }
      
      function showListAnimation() {
        $(".links .list-unstyled li").each(function(index) {
          $(this).css({
            position: "relative",top: "20px",opacity: "0"}).animate({ top: "0",opacity: "1"
          }, 900, "swing", function() {
            if (index === $(".links .list-unstyled li").length - 1) {
              // Animation complete
            }
          });
        });
      }
      
    
      
      $(".categories, .Ingredients").click(function() {
        showListAnimation();
      });
    async function getCategories() {
        rowData.innerHTML = "";
        contactus.innerHTML="";
        let response = await fetch(`${BASE_URL}/api/json/v1/1/categories.php`);
        let data = await response.json();
        displayCategories(data.categories);
    }

    function displayCategories(arr) {
        let cartoona = "";
        defaultSection.innerHTML="";
        for (let i = 0; i < arr.length; i++) {
            cartoona += `
            <div class="col-md-3">
                <div onclick="getCategoryMeals('${arr[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 pointer">
                    <img class="w-100" src="${arr[i].strCategoryThumb}" alt="${arr[i].strCategory}" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${arr[i].strCategory}</h3>
                        <p>${arr[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                    </div>
                </div>
            </div>`;
        }
        rowData.innerHTML = cartoona;
    }
    async function getdefaultSection() {
        rowData.innerHTML = "";
        contactus.innerHTML="";
        SearchSection.innerHTML="";
        let response = await fetch(`${BASE_URL}/api/json/v1/1/random.php`);
        let data = await response.json();
        displaydefaultSection(data.meals);
    }
   for(let i=0;i<24;i++){
    getdefaultSection();
   }
    function displaydefaultSection(arr) {
        let cartoona = "";
        for (let i = 0; i < arr.length; i++) {
            cartoona += `
             <div class="col-md-3">
                <div  class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                </div>
        </div>
            
                `;
        }
        defaultSection.innerHTML += cartoona;
    }

    async function getArea() {
        rowData.innerHTML = "";
        defaultSection.innerHTML="";
        contactus.innerHTML="";
        SearchSection.innerHTML="";
        let response = await fetch(`${BASE_URL}/api/json/v1/1/list.php?a=list`);
        let data = await response.json();
        displayArea(data.meals);
    }

    function displayArea(arr) {
        let cartoona = "";
        for (let i = 0; i < arr.length; i++) {
            cartoona += `
            <div class="col-md-3">
                <div onclick="getAreaMeals('${arr[i].strArea}')" class="rounded-2 text-center cursor-pointer">
                    <i class="fas fa-home fa-4x"></i>
                    <h3>${arr[i].strArea}</h3>
                </div>
            </div>`;
        }
        rowData.innerHTML = cartoona;
    }

    async function getIngredients() {
        rowData.innerHTML = "";
        defaultSection.innerHTML="";
        contactus.innerHTML="";
        SearchSection.innerHTML="";
        let response = await fetch(`${BASE_URL}/api/json/v1/1/list.php?i=list`);
        let data = await response.json();
        displayIngredients(data.meals.slice(0, 20));
    }

    function displayIngredients(arr) {
        let cartoona = "";
        for (let i = 0; i < arr.length; i++) {
            cartoona += `
            <div class="col-md-3">
                <div onclick="getIngredientsMeals('${arr[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
                    <i class="fas fa-drumstick-bite fa-4x"></i>
                    <h3>${arr[i].strIngredient}</h3>
                    <p>${arr[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
                </div>
            </div>`;
        }
        rowData.innerHTML = cartoona;
    }

    $("#categories").click(function () {
        getCategories();
        CloseNav();
    });

    $("#area").click(function () {
        getArea();
        CloseNav();
    });

    $("#Ingredients").click(function () {
        getIngredients();
        CloseNav();
    });

  
    $(".menu").on("click", function () {
        if ($(this).hasClass("fa-bars")) {
            OpenNav();
        } else {
            CloseNav();
        }
    });
  
//     function hideDefaultSection() {
//         document.getElementById('defaultSection').style.display = 'none';
//     }
    
//     function showDefaultSection() {
//         document.getElementById('defaultSection').style.display = 'block';
//     }
    
//     $(".categories, .area, .Ingredients").click(function () {
//         hideDefaultSection();
//         // Optionally, you can add additional logic or actions here
//     });
//     // Example function to handle getting meal details and showing/hiding sections
//     function getMealDetails(mealId) {
//         // Code to get meal details
//         // After getting details, hide default section
//         hideDefaultSection();
//         // Optionally, perform other actions related to showing meal details
//     }
// // Function to validate input fields in the contact form
//   function showContactUsSection() {
//     hideDefaultSection(); // Hide default section if necessary

//     // Show the contact us section
//     document.getElementById('contactUsSection').classList.remove('d-none');
// }


// function inputsValidation() {
//     // Get input field values
//     const name = document.getElementById('nameInput').value.trim();
//     const email = document.getElementById('emailInput').value.trim();
//     const phone = document.getElementById('phoneInput').value.trim();
//     const age = document.getElementById('ageInput').value.trim();
//     const password = document.getElementById('passwordInput').value.trim();
//     const repassword = document.getElementById('repasswordInput').value.trim();

//     // Regular expressions for validation
//     const nameRegex = /^[a-zA-Z ]+$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\d{11}$/;
//     const passwordRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;

//     // Validation flags
//     let isNameValid = nameRegex.test(name);
//     let isEmailValid = emailRegex.test(email);
//     let isPhoneValid = phoneRegex.test(phone);
//     let isAgeValid = !isNaN(age) && age >= 12; // Sample age validation, adjust as needed
//     let isPasswordValid = passwordRegex.test(password);
//     let isRepasswordValid = password === repassword;

//     // Show/hide alerts based on validation
//     toggleAlert('nameInput', 'nameAlert', isNameValid);
//     toggleAlert('emailInput', 'emailAlert', isEmailValid);
//     toggleAlert('phoneInput', 'phoneAlert', isPhoneValid);
//     toggleAlert('ageInput', 'ageAlert', isAgeValid);
//     toggleAlert('passwordInput', 'passwordAlert', isPasswordValid);
//     toggleAlert('repasswordInput', 'repasswordAlert', isRepasswordValid);

//     // Enable/disable submit button
//     const submitBtn = document.getElementById('submitBtn');
//     submitBtn.disabled = !(isNameValid && isEmailValid && isPhoneValid && isAgeValid && isPasswordValid && isRepasswordValid);
// }
// function toggleAlert(inputId, alertId, isValid) {
//     const inputField = document.getElementById(inputId);
//     const alertElement = document.getElementById(alertId);

//     if (!isValid) {
//         inputField.classList.add('is-invalid');
//         alertElement.classList.remove('d-none');
//     } else {
//         inputField.classList.remove('is-invalid');
//         alertElement.classList.add('d-none');
//     }
// }


// Function to search meals by name
// function searchByName(name) {
//     if (name.trim() === '') {
//         clearMeals();
//         return;
//     }

//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
//         .then(response => response.json())
//         .then(data => displayMeals(data.meals))
//         .catch(error => console.error('Error searching by name:', error));
// }

// // Function to search meals by first letter
// function searchByFLetter(letter) {
//     if (letter.trim() === '') {
//         clearMeals();
//         return;
//     }

//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
//         .then(response => response.json())
//         .then(data => displayMeals(data.meals))
//         .catch(error => console.error('Error searching by first letter:', error));
// }
// document.getElementById('search').addEventListener('click', function () {
//     hideAllSections();
//     showSearchSection();
//     CloseNav();
// });
// Function to display meals
function displayMeals(meals) {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';

    if (meals) {
        meals.forEach(meal => {
            const mealCard = `
                <div class="col-md-3 mb-4">
                    <div class="meal-card position-relative">
                        <img src="${meal.strMealThumb}" class="img-fluid" alt="${meal.strMeal}">
                        <div class="meal-overlay position-absolute bottom-0 w-100 p-3">
                            <h4 class="text-white mb-0">${meal.strMeal}</h4>
                        </div>
                    </div>
                </div>`;
            mealsContainer.innerHTML += mealCard;
        });
    } else {
        mealsContainer.innerHTML = '<p class="text-white">No meals found.</p>';
    }
}

// Function to clear meals container
function clearMeals() {
    document.getElementById('meals-container').innerHTML = '';
}

function displaySearch() {
    $('#contactus').html("");
    $('#defaultSection').html("");
    $('#rowData').html("");
    let cartoona = `
        <div class="col-md-6 placeholders text-white">
            <input onkeyup="searchByName(this.value)" class="form-control bg-transparent placeholders text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchByFLetter(this.value)" maxlength="1" class="form-control placeholders bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    `;
    $('#SearchSection').html(cartoona);
}

function searchByName(name) {
    if (!name) {
        $('#rowData').html("");
        return;
    }

    $.ajax({
        url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
        method: 'GET',
        success: function(data) {
            displayMeals(data.meals);
        }
    });
}

function searchByFLetter(letter) {
    if (!letter) {
        $('#rowData').html("");
        return;
    }

    $.ajax({
        url: `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
        method: 'GET',
        success: function(data) {
            displayMeals(data.meals);
        }
    });
}

function displayMeals(meals) {
    let cartoona = "";
    if (meals) {
        meals.forEach(meal => {
            cartoona += `
                   <div class="col-md-3">
                        <div class="card mb-4 h-100 meal-card">
                            <img src="${meal.strMealThumb}" class="card-img-top h-100" alt="${meal.strMeal}">
                            <div class="meal-overlay">
                                <div class="meal-overlay-content">
                                    <h4>${meal.strMeal}</h4>
                                    <p>${meal.strInstructions.substring(0, 100)}...</p>
                                    <a href="${meal.strSource}" target="_blank" class="btn btn-primary mt-3">Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        });
    } else {
       ` cartoona = <div class="col-12"><p class="text-white">No meals found.</p></div>;`
    }
    $('#rowData').html(cartoona);
}

// Initial call to display the search inputs
displaySearch();


function inputsValidation() {
    // Get input field values
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const phone = document.getElementById('phoneInput').value.trim();
    const age = document.getElementById('ageInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    const repassword = document.getElementById('repasswordInput').value.trim();
  
    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    // Validation flags
    let isNameValid = nameRegex.test(name);
    let isEmailValid = emailRegex.test(email);
    let isPhoneValid = phoneRegex.test(phone);
    let isAgeValid = !isNaN(age) && age >= 12; // Sample age validation, adjust as needed
    let isPasswordValid = passwordRegex.test(password);
    let isRepasswordValid = password === repassword;
  
    // Show/hide alerts based on validation
    toggleAlert('nameAlert', isNameValid);
    toggleAlert('emailAlert', isEmailValid);
    toggleAlert('phoneAlert', isPhoneValid);
    toggleAlert('ageAlert', isAgeValid);
    toggleAlert('passwordAlert', isPasswordValid);
    toggleAlert('repasswordAlert', isRepasswordValid);
  
    // Enable/disable submit button
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = !(isNameValid && isEmailValid && isPhoneValid && isAgeValid && isPasswordValid && isRepasswordValid);
  }
  
  function displayContact() {
    rowData.innerHTML = "";
    defaultSection.innerHTML="";
    SearchSection.innerHTML="";
    const contactus = document.querySelector('.contactus');
    contactus.innerHTML = ""; // Clear any existing content
    
    let cartoona = `
      <div class="container">
      <div class="row g-4">
        <div class="col-md-6">
          <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
          <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-block">
            Special characters and numbers not allowed
          </div>
        </div>
        <div class="col-md-6">
          <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control" placeholder="Enter Your Email">
          <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-block">
            Email not valid *exemple@yyy.zzz
          </div>
        </div>
        <div class="col-md-6">
          <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Phone">
          <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-block">
            Enter valid Phone Number
          </div>
        </div>
        <div class="col-md-6">
          <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control" placeholder="Enter Your Age">
          <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid age
          </div>
        </div>
        <div class="col-md-6">
          <input id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control" placeholder="Enter Your Password">
          <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid password Minimum eight characters, at least one letter and one number:
          </div>
        </div>
        <div class="col-md-6">
          <input id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control" placeholder="Repassword">
          <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid repassword 
          </div>
        </div></div>
      
      <button id="submitBtn" disabled class="btn-center btn btn-outline-danger px-2 mt-3">Submit</button></div>
    `;
    
    contactus.innerHTML = cartoona;
  
    // Initially run validation to ensure initial state is correct
    inputsValidation();
  }
  
  // Function to toggle alert visibility
  function toggleAlert(id, isValid) {
    const alert = document.getElementById(id);
    if (isValid) {
      alert.classList.add('d-none');
    } else {
      alert.classList.remove('d-none');
    }
  }
  
  // Example of how to initialize the displayContact function
  displayContact();
  

// Call displayContact to show the form
displayContact();
$(".search").on("click",function(){
    displaySearch();
    CloseNav();
});

$(".contact").on("click",function(){
    displayContact();
    CloseNav();
});
