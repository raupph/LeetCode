
function comum(s: string, t:string): string[]{

    let comumArr:string[] = [];
    let hashMap1: Map<string, number> = new Map();
    let hashMap2: Map<string, number> = new Map();

    for(let i = 0; i < s.length; i++){
        hashMap1.set(s[i], i);
    }

    for(let i = 0; i < t.length; i++){
        if(hashMap1.has(t[i]) && !hashMap2.has(t[i])){
            comumArr.push(t[i]);
        }
        hashMap2.set(t[i], i);
    }

    return comumArr;
}

// Testes básicos
console.log('Teste 1 - comum("abc", "def"):', comum('abc', 'def'));
console.log('Teste 2 - comum("abc", "aec"):', comum('abc', 'aec'));
console.log('Teste 3 - comum("hello", "world"):', comum('hello', 'world'));
console.log('Teste 4 - comum("abcdef", "ace"):', comum('abcdef', 'ace'));
console.log('Teste 5 - comum("test", "best"):', comum('test', 'best'));

// Edge cases
console.log('\n--- Edge Cases ---');
console.log('Teste 6 - Strings vazias - comum("", ""):', comum('', ''));
console.log('Teste 7 - Primeira vazia - comum("", "abc"):', comum('', 'abc'));
console.log('Teste 8 - Segunda vazia - comum("abc", ""):', comum('abc', ''));
console.log('Teste 9 - Duplicados em t - comum("abc", "aabbcc"):', comum('abc', 'aabbcc'));
console.log('Teste 10 - Duplicados em s - comum("aabbcc", "abc"):', comum('aabbcc', 'abc'));
console.log('Teste 11 - Mesma string - comum("abc", "abc"):', comum('abc', 'abc'));
console.log('Teste 12 - Todos diferentes - comum("abc", "xyz"):', comum('abc', 'xyz'));
console.log('Teste 13 - Um caractere comum - comum("a", "a"):', comum('a', 'a'));