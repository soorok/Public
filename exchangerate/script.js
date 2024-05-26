async function calculateExchange() {
    const amount = document.getElementById('amount').value;
    const resultDiv = document.getElementById('result');

    if (amount === "") {
        resultDiv.innerHTML = "금액을 입력해주세요.";
        return;
    }

    try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/KRW');
        const data = await response.json();
        const rate = data.conversion_rates.JPY;
        const convertedAmount = (amount * rate).toFixed(2);

        resultDiv.innerHTML = `${amount} KRW는 약 ${convertedAmount} JPY 입니다.`;
    } catch (error) {
        resultDiv.innerHTML = "환율 정보를 가져오는 데 실패했습니다. 나중에 다시 시도해주세요.";
    }
}
