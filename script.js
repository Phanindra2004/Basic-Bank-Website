// Personal Banking Login Button
document.getElementById("personal-login").onclick = function () {
  alert("Personal Banking Login Clicked!");
};

// Corporate Banking Login Button
document.getElementById("corporate-login").onclick = function () {
  alert("Corporate Banking Login Clicked!");
};

// Quick Links - Personal Banking
document
  .querySelectorAll(".panel.personal .quick-links div")
  .forEach((el, idx) => {
    el.onclick = function () {
      switch (idx) {
        case 0:
          alert("New User Registration / Activation Clicked!");
          break;
        case 1:
          alert("How Do I (Personal) Clicked!");
          break;
        case 2:
          alert("Customer Care (Personal) Clicked!");
          break;
        case 3:
          alert("Lock & Unlock User Clicked!");
          break;
      }
    };
  });

// Quick Links - Corporate Banking
document
  .querySelectorAll(".panel.corporate .quick-links div")
  .forEach((el, idx) => {
    el.onclick = function () {
      switch (idx) {
        case 0:
          alert("New Corporate Registration Clicked!");
          break;
        case 1:
          alert("How Do I (Corporate) Clicked!");
          break;
        case 2:
          alert("Customer Care (Corporate) Clicked!");
          break;
      }
    };
  });

// Links Section
document.querySelectorAll(".links-section a").forEach((link) => {
  link.onclick = function (e) {
    e.preventDefault();
    alert(`Link: ${link.textContent.trim()} Clicked!`);
  };
});

// Navigation bar buttons
document.querySelectorAll(".nav a").forEach((nav) => {
  nav.onclick = function (e) {
    e.preventDefault();
    alert(`Navigation: ${nav.textContent.trim()} Clicked!`);
  };
});
