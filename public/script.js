document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calcForm');
    const resultContainer = document.getElementById('result');
    const errorContainer = document.getElementById('error');
    const loading = document.getElementById('loading');
    const calculationEl = document.getElementById('calculation');
    const resultValueEl = document.getElementById('resultValue');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // 隐藏之前的结果和错误
        resultContainer.style.display = 'none';
        errorContainer.style.display = 'none';
        loading.style.display = 'block';
        
        const formData = new FormData(form);
        const data = {
            admin: formData.get('admin'),
            user: formData.get('user')
        };

        try {
            const response = await fetch('/api/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                calculationEl.textContent = result.calculation;
                resultValueEl.textContent = `结果: ${result.result}`;
                resultContainer.style.display = 'block';
                errorContainer.style.display = 'none';
            } else {
                throw new Error(result.error);
            }
            
        } catch (error) {
            errorContainer.textContent = `错误: ${error.message}`;
            errorContainer.style.display = 'block';
            resultContainer.style.display = 'none';
        } finally {
            loading.style.display = 'none';
        }
    });

    // 输入变化时清空结果
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            resultContainer.style.display = 'none';
            errorContainer.style.display = 'none';
        });
    });
});