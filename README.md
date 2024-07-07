## Getting Started

1. Clone repository.

2. Install dependencies: 
```bash
pnpm install
``` 
3. Crear una copia de ```.env.template```, rename it to ```.env``` and change the values.
4. Run the database
```bash
docker compose up -d
```
5. Run prisma migrations
```bash
pnpx prisma migrate dev
```
6. Run seed
```bash
pnpm seed
```
7. Run the development server:
```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


