<!DOCTYPE html>
<html lang="en">

<%- include('partials/head.ejs') %>

  <body class="bg-info">
    <header>
      <%- include('partials/nav.ejs') %>
    </header>

    <main>
      <div class="container bg-light p-3 rounded bg-opacity-75">
        <h3>Technician Info</h3>
        <hr>
        <form>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group mt-3">
                <label for="fname">First Name</label>
                <input class="form-control" type="text" id="fname" placeholder="First Name">
              </div>
              <div class="form-group mt-3">
                <label for="email">E-mail</label>
                <input class="form-control" type="text" id="email" placeholder="E-mail">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group mt-3">
                <label for="lname">Last Name</label>
                <input class="form-control" type="text" id="lname" placeholder="Last Name">
              </div>
              <div class="form-group mt-3">
                <label for="phone">Phone Number</label>
                <input class="form-control" type="text" id="phone" placeholder="Phone #">
              </div>
            </div>
          </div>
        </form>
        <button class="btn btn-warning mt-3" onclick="GetCancelledMF()">Cancel</button>
        <input type="submit" class="btn btn-primary mt-3" onclick="addTech(event)">
      </div>
    </main>

    <footer>
      <%- include('partials/footer.ejs') %>
    </footer>

    <script>
      function GetCancelledMF() {
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
      }

      let addTech = (e) => {
        e.preventDefault();
        const form = document.querySelector('form');
        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          form.reportValidity();
          return;
        }
        let formData = {
          fname: document.getElementById("fname").value,
          lname: document.getElementById("lname").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value
        };
        console.log(formData);
        fetch('/tech/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }).then(res => {
          if (res.status === 200) {
            alert('Saved!');
            form.classList.remove('was-validated');
            form.reset();
            window.location.href = ('/tech/list');
          }
        }).catch(err => console.log(err));
      }
    </script>
  </body>

</html>
