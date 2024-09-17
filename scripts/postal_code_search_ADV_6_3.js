var postalCodeADV_6_3;

function find_postal_code_ADV_6_3(list, item) {
  item = item.toLowerCase();
  
  if (item) {
    if (item !== "") {
      for (i = 0; i < list.length; i++) {
        if (list[i].Name.toLowerCase() === item) {
          $('.rt-btn.rt-btn-next').show(); 
          return true;
        }
      }
    }
  }
  //$('.rt-btn.rt-btn-next').hide(); 
  return false;
}

function load_postal_code_ADV_6_3() {
  console.log("load_postal_code_ADV_6_3 started...");

  postalCodeADV_6_3 = JSON.parse(postalCodeGermany);

  console.log("load_postal_code_ADV_6_3 done!");
}

function search_postal_code_ADV_6_3() {
  var input = document.getElementById('inputPostalCodeADV_6_3ID').value;
  var list = document.getElementById('postalCodeADV_6_3List');
  
  list.innerHTML = '';
  input = input.toLowerCase();

  console.log("search_postal_code_ADV_6_3 started...");
  var count = 0;
  for (i = 0; i < postalCodeADV_6_3.length; i++) {
    let postcalCode = postalCodeADV_6_3[i];

    if (postcalCode.Name.toLowerCase().includes(input)) {
      const elem = document.createElement("option");
      elem.value = postcalCode.Name;
      list.appendChild(elem);
      count++;
    }
    if (count > 30) break;
  }

  console.log("search_postal_code_ADV_6_3 done!");
  
  if (find_postal_code_ADV_6_3(postalCodeADV_6_3, document.getElementById('inputPostalCodeADV_6_3ID').value)) {
    console.log("Found ", document.getElementById('inputPostalCodeADV_6_3ID').value);
  }
  else{
    console.log("not found ", document.getElementById('inputPostalCodeADV_6_3ID').value);
  }
}

function select_postal_code_ADV_6_3() {
  var postalCode = document.getElementById('inputPostalCodeADV_6_3ID').value;
  api.fn.answers({ADV_6_3a_postalcode:  postalCode});
  console.log("ADV_6_3_search_list:", postalCode);
  
    
  if (find_postal_code_ADV_6_3(postalCodeADV_6_3, document.getElementById('inputPostalCodeADV_6_3ID').value)) {
    console.log("Found ", document.getElementById('inputPostalCodeADV_6_3ID').value);
  }
  else{
    console.log("not found ", document.getElementById('inputPostalCodeADV_6_3ID').value);
    alert("Please select a postal code from the list.");
  }

  console.log("select_postal_code_ADV_6_3 done!");
}

function showPostalCodeSection_ADV_6_3() {
    load_postal_code_ADV_6_3();  

    $('.rt-element.rt-text-container').append(`<input list="postalCodeADV_6_3List" onchange="select_postal_code_ADV_6_3()"  onkeyup="search_postal_code_ADV_6_3()" name="inputPostalCodeADV_6_3ID" id="inputPostalCodeADV_6_3ID" >
    <datalist id="postalCodeADV_6_3List"> </datalist>`);
    document.getElementById('inputPostalCodeADV_6_3ID').value = "";

    var currentValue  = api.fn.answers().ADV_6_3a_postalcode;
    if (currentValue) {
      if (currentValue !== "") {
        document.getElementById('inputPostalCodeADV_6_3ID').value = currentValue;
      }
    }

    if (find_postal_code_ADV_6_3(postalCodeADV_6_3, document.getElementById('inputPostalCodeADV_6_3ID').value)) {
      console.log("Found ", document.getElementById('inputPostalCodeADV_6_3ID').value);
    }
    else{
      console.log("not found ", document.getElementById('inputPostalCodeADV_6_3ID').value);
    }

    $('.rt-btn.rt-btn-next').hide(); 
    $('#inputPostalCodeADV_6_3ID').show(); 
}

function hidePostalCodeSection_ADV_6_3() {
  $('#inputPostalCodeADV_6_3ID').hide();
}