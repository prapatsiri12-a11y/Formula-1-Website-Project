const drivers = [
  { name:'Max Verstappen', team:'Red Bull', country:'Netherlands', img:'img/drivers/แม็ก.gif', bioPage:'ประวัติแม็ก.html' },
  { name:'Lewis Hamilton', team:'Ferrari', country:'UK', img:'img/drivers/ลูอิส.gif', bioPage:'ประวัติลูอิส.html' },
  { name:'Charles Leclerc', team:'Ferrari', country:'Monaco', img:'img/drivers/เจ้าชายชาร์ล.gif', bioPage:'ประวัติชาร์ลส.html' },
  { name:'Lando Norris', team:'McLaren', country:'UK', img:'img/drivers/แลนโด้.gif', bioPage:'ประวัติแลนโด้.html' },
  { name:'Oscar Piastri', team:'McLaren', country:'Australia', img:'img/drivers/ออสก้า.gif', bioPage:'ประวัติโอสการ์.html' },
  { name:'George Russell', team:'Mercedes', country:'UK', img:'img/drivers/ยัยจอร์จ2.gif', bioPage:'ประวัติจอร์จ.html' },
  { name:'Kimi Antonelli', team:'Mercedes', country:'Italy', img:'img/drivers/คิมิ.gif', bioPage:'ประวัติคิมิ.html' },
  { name:'Alexander Albon', team:'Williams', country:'Thailand/UK', img:'img/drivers/หลานยายน้อย.gif', bioPage:'หลานยายน้อย.html' },
  { name:'Carlos Sainz', team:'Williams', country:'Spain', img:'img/drivers/คาร์ลอส.gif', bioPage:'ประวัติคาร์คอส.html' },
  { name:'Liam Lawson', team:'Racing Bulls', country:'New Zealand', img:'img/drivers/เลียม.gif', bioPage:'เลียม.html' },
  { name:'Isack Hadjar', team:'Racing Bulls', country:'France', img:'img/drivers/ฮัจจา.gif', bioPage:'ฮัจจา.html' },
  { name:'Lance Stroll', team:'Aston Martin', country:'Canada', img:'img/drivers/พ่อรวย2.gif', bioPage:'พ่อรวย.html' },
  { name:'Fernando Alonso', team:'Aston Martin', country:'Spain', img:'img/drivers/อลอนโซ่.gif', bioPage:'อลอนโซ่.html' },
  { name:'Esteban Ocon', team:'Haas', country:'France', img:'img/drivers/โอคอน.gif', bioPage:'โอคอน.html' },
  { name:'Oliver Bearman', team:'Haas', country:'UK', img:'img/drivers/น้องหมี.gif', bioPage:'น้องหมี.html' },
  { name:'Nico Hulkenberg', team:'Kick Sauber', country:'Germany', img:'img/drivers/นิโค.gif', bioPage:'นิโค.html' },
  { name:'Gabriel Bortoleto', team:'Kick Sauber', country:'Brazil', img:'img/drivers/กาเบียล.gif', bioPage:'กาเบียล.html' },
  { name:'Pierre Gasly', team:'Alpine', country:'France', img:'img/drivers/ปีแอร์.gif', bioPage:'ปีแอร์.html' },
  { name:'Franco Colapinto', team:'Alpine', country:'Argentina', img:'img/drivers/ติ๋มมานี่มา.gif', bioPage:'ติ๋มhtml' },
  { name:'Yuki Tsunoda', team:'Red Bull Racing', country:'Japan', img:'img/drivers/ยูกิ.gif', bioPage:'ประวัติยูกิ.html' }
];

const driversGrid = document.getElementById('driversGrid');
if (driversGrid) {
  drivers.forEach(driver => {
    const cardLink = document.createElement('a');
    cardLink.href = driver.bioPage;
    cardLink.classList.add('driver-link');

    const card = document.createElement('div');
    card.classList.add('driver-card');
    card.innerHTML = `
      <img src="${driver.img}" alt="${driver.name}">
      <h3>${driver.name}</h3>
      <p>${driver.team}</p>
      <p>${driver.country}</p>
    `;

    cardLink.appendChild(card);
    driversGrid.appendChild(cardLink);
  });
}
