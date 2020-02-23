console.warn(`<g>
    <rect width="10" height="10" x="14" y="90" fill="#7bc96f"></rect>
    <rect width="10" height="10" x="64" y="0" fill="#7bc96f"></rect>
</g>`);

let pasdsa = 12351;
const pep = 'privet';
const nam = (name) => console.warn(` +  ${name} ${pep}`);

const t = async function tata(fx) {
    const val = await new Promise((resolve) => setTimeout(() => resolve(9), 5000));

    return await Promise.resolve(fx) + val;
};

if (undefined !== t(pep + nam(pasdsa))) {
    pasdsa += 42;
    t(pasdsa);
}
