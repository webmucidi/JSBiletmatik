//Responsive olması için eklenti çağırdık.
ImageMap('img[usemap]');

//Imagemap üzerindeki tıklanabilir her alan için olay yakalayıcı yazdık.
document.addEventListener('DOMContentLoaded', function() {
  const areas = document.querySelectorAll('map[name="stadiummap"] area');
  areas.forEach((area) => {
    area.addEventListener('click', function() {
      const alt = area.getAttribute('alt');
      selectBlock(alt);
    });
  });
});


//Fiyatlar için veri seti tanımladık.
const prices = [4000, 3000, 2000, 1000];
  
//Fiyat hesaplama fonksiyonu
  function updatePrice() {
    const selectedCategory = document.getElementById('selected-category').textContent;
    const numPersons = document.getElementById('num-persons').value;
    const totalPrice = prices[selectedCategory-1] * numPersons;
    document.getElementById('total-price').textContent =  totalPrice+' TL' ;
  }
  
//Blok seçme fonksiyonu
  function selectBlock(category) {
    document.getElementById('selected-category').textContent = category;
    updatePrice();
  }
  
  // Kişiye göre fiyat hesaplama için olay yakalayıcı
  document.getElementById('num-persons').addEventListener('change', updatePrice);
  