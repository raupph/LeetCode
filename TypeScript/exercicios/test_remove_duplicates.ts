//console.log('Teste 1 - removeComum("abc", "def"):', removeComum('abc', 'def'));


function removeComum(s: string, t: string): string[]{

    const hashMap: Map<string, number> = new Map();
    const commum: Set<string> = new Set();

    for(let i = 0; i < s.length; i ++){
        hashMap.set(s[i], i);
    }

    for(let i = 0; i < t.length; i++){
        if(hashMap.has(t[i])){
            commum.add(t[i]);
        }
    }
    return Array.from(commum);
}


// Testes básicos
console.log('Teste 1 - removeComum("abc", "def"):', removeComum('abc', 'def'));
console.log('Teste 2 - removeComum("abc", "aec"):', removeComum('abc', 'aec'));
console.log('Teste 3 - removeComum("hello", "world"):', removeComum('hello', 'world'));
console.log('Teste 4 - removeComum("abcdef", "ace"):', removeComum('abcdef', 'ace'));
console.log('Teste 5 - removeComum("test", "best"):', removeComum('test', 'best'));

// Edge cases
console.log('\n--- Edge Cases ---');
console.log('Teste 6 - Strings vazias - removeComum("", ""):', removeComum('', ''));
console.log('Teste 7 - Primeira vazia - removeComum("", "abc"):', removeComum('', 'abc'));
console.log('Teste 8 - Segunda vazia - removeComum("abc", ""):', removeComum('abc', ''));
console.log('Teste 9 - Duplicados em t - removeComum("abc", "aabbcc"):', removeComum('abc', 'aabbcc'));
console.log('Teste 10 - Duplicados em s - removeComum("aabbcc", "abc"):', removeComum('aabbcc', 'abc'));
console.log('Teste 11 - Mesma string - removeComum("abc", "abc"):', removeComum('abc', 'abc'));
console.log('Teste 12 - Todos diferentes - removeComum("abc", "xyz"):', removeComum('abc', 'xyz'));
console.log('Teste 13 - Um caractere removeComum - removeComum("a", "a"):', removeComum('a', 'a'));