document.addEventListener('DOMContentLoaded', () => {
   

    const form = document.querySelector('.form-wizard')
    const progress = form.querySelector('.progress');
    const stepsContainer = form.querySelector('.steps-container');
    const steps = form.querySelectorAll('.step');
    const stepIndicator = form.querySelectorAll('.progress-container li');
    const prevButton = form.querySelector('.prev-btn');
    const nextButton = form.querySelector('.next-btn');
    const submitButton = form.querySelector('.submit-btn');

    document.documentElement.style.setProperty("--steps", stepIndicator.length);

    let currentStep = 0;

    const updateProgress = () => {
        let width = currentStep / (stepIndicator.length - 1);
        progress.style.transform = `scaleX(${width})`;

        stepsContainer.style.height = steps[currentStep].offsetHeight + "px";

        stepIndicator.forEach((indicator, index) => {
            indicator.classList.toggle('current', index === currentStep);
            indicator.classList.toggle('done', index < currentStep);
        });
        steps.forEach((step, index) => {
            step.style.transform = `translateX(-${currentStep * 100}%)`
            step.classList.toggle('current', index === currentStep);
           
        });

        updateButtons();
    };

    const updateButtons = () => {
        prevButton.hidden = currentStep === 0;
        nextButton.hidden = currentStep >= stepIndicator.length - 1;
        submitButton.hidden = !nextButton.hidden;
    };

    const isValidStep = () =>{
        const fields = steps[currentStep].querySelectorAll('input, textarea');
        return [...fields].every((field) =>field.reportValidity());
    }

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => input.addEventListener('focus', (e) =>{
        const focusedElement = e.target;

        //get the steps where the focused elemtn belongs

        const focusedStep = [...steps].findIndex(step => step.contains(focusedElement));

        if(focusedStep !== -1 && focusedStep !== currentStep){
            if(!isValidStep()) return;

            
            currentStep = focusedStep;
            updateProgress()
        }

        stepsContainer.scrollTop = 0;
        stepsContainer.scrollLeft = 0;

    }))

    form.addEventListener('submit', (e) =>{
        e.preventDefault(); 

        if(!form.checkValidity()) return;
        const formData = new FormData(form);

        console.log(Object.fromEntries(formData));

        submitButton.disable = true;
        submitButton.textContent = 'Submitting....';

        //minic a server request

        setTimeout(()=>{
            document.querySelector('.completed').hidden = false;
        }, 3000)
    })

    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentStep > 0) {
            currentStep--;
            updateProgress();
        }
    });

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();

        if(!isValidStep()) return;
        if (currentStep < stepIndicator.length - 1) {
            currentStep++;
            updateProgress();
        }
    });

    updateProgress();
});