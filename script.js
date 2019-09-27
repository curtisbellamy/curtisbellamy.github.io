function showForm() {
    if (document.getElementById("inputForm").style.display == "none"){
        document.getElementById("inputForm").style.display = "grid"
    }
    else {
        document.getElementById("inputForm").style.display = "none";
    }
}

function addArtist() {

    var valid = true

    let artistName = document.getElementById("name").value;
    let artistInfo = document.getElementById("info").value;
    let artistImg = document.getElementById("img").value;

    if(artistName.length > 40){
        alert("Please enter a name with 40 characters or less.")
        document.getElementById("name").value = ""
        valid = false;
    }

    if(artistInfo.length > 40){
        alert("Please enter a description with 40 characters or less.")
        document.getElementById("info").value = ""
        valid = false;
    }

    if (valid){

        var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "artistInfo");

        var image = document.createElement("img");
        image.setAttribute("src", artistImg);
        image.setAttribute("class", "artistImg");

        var name = document.createElement("H3");
        name.setAttribute("class", "name");
        var nameText = document.createTextNode(artistName);
        name.appendChild(nameText);

        var info = document.createElement("H5");
        info.setAttribute("class", "school");
        var infoText = document.createTextNode(artistInfo);
        info.appendChild(infoText);

        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "deleteBtn");
        deleteBtn.setAttribute("id", "1");
        deleteBtn.setAttribute("onClick", "deleteArtist(this.id)")
        var deleteLabel = document.createTextNode("Delete");
        deleteBtn.appendChild(deleteLabel);



        mainDiv.appendChild(image);
        mainDiv.appendChild(name);
        mainDiv.appendChild(deleteBtn);
        mainDiv.appendChild(info);

        var parentDiv = document.getElementById("artistList")

        parentDiv.appendChild(mainDiv);
        document.getElementById("inputForm").style.display = "none";

        let artistForm1 = document.getElementById("name");
        let artistForm2 = document.getElementById("info");
        let artistForm3 = document.getElementById("img");

        artistForm1.value = ""
        artistForm2.value = ""
        artistForm3.value = ""
    }

}

function deleteArtist(id) {
    var parent = document.getElementById(id).parentNode;
    parent.remove();
}