
# Installation and Setup Guide

## Libraries to Install and Commands to Run

### 1. **Django & Django Rest Framework**

Install Django and Django Rest Framework:

```bash
pip install django djangorestframework
```

To apply the model migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

### 2. **Django Extensions**

Install `django-extensions` to use `call_command` for data initialization:

```bash
pip install django-extensions
```

### 3. **PostgreSQL (psycopg2)**

Install the Python library for PostgreSQL:

```bash
pip install psycopg2
pip install psycopg2-binary
```

### 4. **Colors**

The following colors are defined for the project:
- Water Green / Blue: `#0cc0df`
- Green: `#00bf63`
- Bright Red: `#ff3131`
- Orange: `#ff914d`
- White: `#ffffff`
- Light Gray: `#eeeff4`

### 5. **Figma Dimensions**

The frame size on Figma is `1512x982`.

### 6. **Tailwind CSS**

To install Tailwind CSS and its dependencies, run the following commands:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 7. **TypeScript**

Install TypeScript and the necessary types for React and Node.js:

```bash
npm install --save-dev typescript @types/react @types/node
```

### 8. **Create a Next.js Application**

To create a new Next.js application, run:

```bash
npx create-next-app@latest
```

### 9. **Start the Frontend**

To start the frontend development server:

```bash
npm run dev
```

### 10. **Axios**

Install Axios for HTTP requests:

```bash
npm install axios
```

### 11. **CORS in Django**

Install the CORS package for managing cross-origin resource sharing policies in Django:

```bash
pip install django-cors-headers
```

---

This guide covers the installation steps for libraries and environment setup for the project. Ensure to follow the commands in order to avoid configuration errors.
