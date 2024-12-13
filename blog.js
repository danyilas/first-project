const jsonData = [
    {
        image: "_DSC6214.jpg",
        title: "Дары моря",
        text: "Сегодня в морских глубинах было замечено необычное явление. Русалка по имени Ариэль, известная своим любопытством, была замечена рядом с затонувшим кораблем. Специалисты утверждают, что она изучала древние артефакты, оставшиеся на борту, и даже пыталась расшифровать старинные карты, как бы намекая на подготовку к новой подводной экспедиции. Пока неясно, какие именно тайны она пытается раскрыть, но все согласны: с Ариэль скучно не будет!",
        date: "3 дня назад",
        tags: ["море", "русалка", "волшебство"]
    },
    {
        image: "_DSC6240.jpg",
        title: "В царстве котят",
        text: "Сегодня на центральной улице города был замечен кот по имени Мурзик, который стал героем необычной истории. В поисках приключений он обнаружил в картонной коробке щенка, потерявшегося и бездомного. Мурзик не остался равнодушным и взял щенка под свою опеку. Вместе они отправились в увлекательное путешествие по городу, играя и решая загадки. В конце дня щенок вернулся домой, а Мурзик — с новыми друзьями и гордостью за свою доброту!",
        date: "1 неделя назад",
        tags: ["кот", "Мурзик", "волшебство"]
    },
    {
        image: "IMG_7641.JPG",
        title: "Растение, меняющее цвет в течение дня",
        text: "В парке нашли редкое растение, меняющее цвет в течение дня. Утром оно зеленое, а к вечеру становится фиолетовым и синим. Ботаники предполагают, что это связано с фотосинтезом и планируют провести исследования. Местные жители уже назвали его \"растением-каменщиком\".",
        date: "2 недели назад",
        tags: ["растение", "магия", "ботаника"]
    }
];

// Функция для отображения карточек блога
function drawCards(data) {
    const container = document.querySelector(".blog-container");
    container.innerHTML = ""; // Очистить контейнер
    data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.innerHTML = `
      <div class="blog-header">
        <div class="blog-cover" style="background-image: url('${item.image}')"></div>
      </div>
      <div class="blog-body">
        <div class="blog-title">
          <h2>${item.title}</h2>
        </div>
        <div class="blog-text">
          <p>${item.text}</p>
        </div>
        <div class="blog-tags">
          <ul>
            ${item.tags.map((tag) => `<li><a href="#">${tag}</a></li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="blog-footer">
        <div class="blog-published-date">${item.date}</div>
      </div>
    `;
        container.appendChild(card);
    });
    initTagsHandler(data);
}

// Функция фильтрации по запросу
function filter(value, data) {
    const filteredData = data.filter((item) => {
        const lowerValue = value.toLowerCase();
        return (
            item.image.toLowerCase().includes(lowerValue) ||
            item.title.toLowerCase().includes(lowerValue) ||
            item.text.toLowerCase().includes(lowerValue) ||
            item.date.toLowerCase().includes(lowerValue) ||
            item.tags.some((tag) => tag.toLowerCase().includes(lowerValue))
        );
    });
    drawCards(filteredData);
}

// Обработчик поиска
function initSearchHandler(data) {
    const searchButton = document.querySelector(".search-do");
    const searchInput = document.querySelector(".search-text");
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        filter(query, data);
    });
}

// Обработчик кликов по тегам
function initTagsHandler(data) {
    const tags = document.querySelectorAll(".blog-tags a");
    tags.forEach((tag) => {
        tag.addEventListener("click", (event) => {
            event.preventDefault();
            const query = event.target.textContent.trim();
            filter(query, data);
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    drawCards(jsonData);
    initSearchHandler(jsonData);
});