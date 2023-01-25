            function onClickNumber(val) {
                document.getElementById('screen').value += val;
            }

            function compute() {
                let x = document.getElementById('screen').value; alert(x);
            }

            function reset() {
                document.getElementById('screen').value = '';
            }
            