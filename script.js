// ===============================================
// 🐍 Python Quiz - JavaScript Logic
// ===============================================

// Quiz Data - 15 Dosya, 75 Soru
const quizData = [
    {
        id: 1,
        fileName: "1.py",
        topic: "Python Temelleri",
        questions: [
            {
                question: "Aşağıdaki kod ne yapar?\n```python\nx = \"John\"\nx = 'John'\n```",
                options: [
                    "Hata verir",
                    "İkisi de aynı sonucu verir",
                    "İlki string, ikincisi char'dır",
                    "İkincisi hata verir"
                ],
                correct: 1
            },
            {
                question: "`x, y, z = \"Orange\", \"Banana\", \"Cherry\"` ifadesine ne denir?",
                options: [
                    "Multiple assignment",
                    "Unpacking",
                    "Tuple packing",
                    "List comprehension"
                ],
                correct: 0
            },
            {
                question: "Aşağıdaki kodun çıktısı nedir?\n```python\nx = \"awesome\"\ndef myfunc():\n    x = \"fantastic\"\n    print(\"Python is \" + x)\nmyfunc()\nprint(\"Python is \" + x)\n```",
                options: [
                    "fantastic, fantastic",
                    "awesome, awesome",
                    "fantastic, awesome",
                    "Hata verir"
                ],
                correct: 2
            },
            {
                question: "`global` keyword ne işe yarar?",
                options: [
                    "Değişkeni siler",
                    "Fonksiyon içinde global değişkeni değiştirmeye izin verir",
                    "Değişkeni kopyalar",
                    "Değişkeni gizler"
                ],
                correct: 1
            },
            {
                question: "Set ve List arasındaki temel fark nedir?",
                options: [
                    "Set sıralıdır, List sırasızdır",
                    "Set tekrar eden elemanlara izin vermez, List verir",
                    "Set değiştirilemez, List değiştirilebilir",
                    "Hiçbir fark yoktur"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 2,
        fileName: "4.hafta.py",
        topic: "Map, Filter, Lambda",
        questions: [
            {
                question: 'Aşağıdaki kod ne döndürür?\n```python\nkişiler = ["Ali", "Ayşe", "Ahmet"]\ntarihler = [1990, 1985, 2000]\nkişiler_ve_tarihler = list(zip(kişiler, tarihler))\n```',
                options: [
                    '[["Ali", 1990], ["Ayşe", 1985], ["Ahmet", 2000]]',
                    '[("Ali", 1990), ("Ayşe", 1985), ("Ahmet", 2000)]',
                    '{"Ali": 1990, "Ayşe": 1985, "Ahmet": 2000}',
                    "Hata verir"
                ],
                correct: 1
            },
            {
                question: '`filter(lambda x: x.endswith("txt"), dosyalar)` ne yapar?',
                options: [
                    ".txt ile biten dosyaları siler",
                    ".txt ile biten dosyaları filtreler",
                    ".txt ile başlayan dosyaları filtreler",
                    "Tüm dosyaları .txt yapar"
                ],
                correct: 1
            },
            {
                question: "`any([False, False, True])` sonucu nedir?",
                options: [
                    "False",
                    "True",
                    "None",
                    "[False, False, True]"
                ],
                correct: 1
            },
            {
                question: "`all([True, True, False])` sonucu nedir?",
                options: [
                    "True",
                    "False",
                    "None",
                    "[True, True, False]"
                ],
                correct: 1
            },
            {
                question: "Aşağıdaki kod ne yapar?\n```python\nnumbers = [5, 2, 9, 1, 5, 6]\nsorted_numbers = sorted(numbers)\n```",
                options: [
                    "numbers listesini sıralar ve değiştirir",
                    "Yeni bir sıralı liste döndürür, numbers değişmez",
                    "Hata verir",
                    "numbers'ı tersine çevirir"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 3,
        fileName: "7.hafta.py",
        topic: "Fonksiyonları Parametre Olarak Gönderme",
        questions: [
            {
                question: 'Aşağıdaki kodun çıktısı nedir?\n```python\ndef selamla(name):\n    return f"merhaba,{name}"\n\ndef execute_function(func, ad):\n    return func(ad)\n\nresult = execute_function(selamla, "İbrahim")\nprint(result)\n```',
                options: [
                    "merhaba,İbrahim",
                    "selamla",
                    "İbrahim",
                    "Hata verir"
                ],
                correct: 0
            },
            {
                question: "Nested function (iç içe fonksiyon) nedir?",
                options: [
                    "Bir fonksiyonun içinde başka bir fonksiyon tanımlamak",
                    "İki fonksiyonu toplamak",
                    "Fonksiyonu kopyalamak",
                    "Fonksiyonu silmek"
                ],
                correct: 0
            },
            {
                question: "Aşağıdaki kodda `power_calculator(2)` ne döndürür?\n```python\ndef power_calculator(exponent):\n    def calculate_power(number):\n        return number ** exponent\n    return calculate_power\n\nsquare = power_calculator(2)\n```",
                options: [
                    "2",
                    "Bir fonksiyon objesi",
                    "4",
                    "Hata verir"
                ],
                correct: 1
            },
            {
                question: "Fonksiyonları parametre olarak göndermek neden kullanılır?",
                options: [
                    "Kodu yavaşlatmak için",
                    "Davranışı değişebilir, esnek kod yazmak için",
                    "Bellek tasarrufu için",
                    "Zorunlu olduğu için"
                ],
                correct: 1
            },
            {
                question: "`function_chains` fonksiyonu ne yapar?",
                options: [
                    "Fonksiyonları siler",
                    "Birden fazla fonksiyonu sırayla uygular",
                    "Fonksiyonları kopyalar",
                    "Hata verir"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        fileName: "AStar.py",
        topic: "A* Algoritması",
        questions: [
            {
                question: "A* algoritması ne için kullanılır?",
                options: [
                    "Sıralama için",
                    "En kısa yol bulma için",
                    "Veri şifreleme için",
                    "Dosya okuma için"
                ],
                correct: 1
            },
            {
                question: "Manhattan distance (Manhattan mesafesi) nedir?",
                options: [
                    "İki nokta arası düz çizgi mesafesi",
                    "İki nokta arası yatay + dikey mesafe",
                    "İki nokta arası çarpım",
                    "İki nokta arası fark"
                ],
                correct: 1
            },
            {
                question: "`heapq` modülü ne işe yarar?",
                options: [
                    "Heap (yığın) veri yapısı için",
                    "String işlemleri için",
                    "Dosya işlemleri için",
                    "Grafik çizimi için"
                ],
                correct: 0
            },
            {
                question: "`is_solvable` fonksiyonu ne kontrol eder?",
                options: [
                    "Puzzle'ın çözülebilir olup olmadığını",
                    "Dosyanın var olup olmadığını",
                    "Sayının asal olup olmadığını",
                    "String'in palindrom olup olmadığını"
                ],
                correct: 0
            },
            {
                question: "`yield` keyword'ü hangi dosyada kullanılmaz?",
                options: [
                    "generator.py",
                    "AStar.py",
                    "iterators.py",
                    "generators.py"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 5,
        fileName: "async_1.py",
        topic: "Asenkron Programlama",
        questions: [
            {
                question: "`async def` ne anlama gelir?",
                options: [
                    "Asenkron fonksiyon tanımlar",
                    "Senkron fonksiyon tanımlar",
                    "Fonksiyonu siler",
                    "Fonksiyonu kopyalar"
                ],
                correct: 0
            },
            {
                question: "`await` keyword'ü ne işe yarar?",
                options: [
                    "Fonksiyonu durdurur",
                    "Asenkron işlemin tamamlanmasını bekler",
                    "Fonksiyonu hızlandırır",
                    "Fonksiyonu siler"
                ],
                correct: 1
            },
            {
                question: "`asyncio.create_task()` ne yapar?",
                options: [
                    "Task (görev) oluşturur ve arka planda çalıştırır",
                    "Task'ı siler",
                    "Task'ı durdurur",
                    "Hata verir"
                ],
                correct: 0
            },
            {
                question: "Aşağıdaki kodda kaç saniye sürer?\n```python\nasync def main():\n    task1 = asyncio.create_task(fetch_data(1, 3))\n    task2 = asyncio.create_task(fetch_data(2, 1))\n    await task1\n    await task2\n```",
                options: [
                    "4 saniye",
                    "3 saniye",
                    "1 saniye",
                    "2 saniye"
                ],
                correct: 1
            },
            {
                question: "`asyncio.run()` ne işe yarar?",
                options: [
                    "Asenkron fonksiyonu çalıştırır",
                    "Fonksiyonu siler",
                    "Fonksiyonu kopyalar",
                    "Hata verir"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 6,
        fileName: "constructor.py",
        topic: "OOP - Sınıflar",
        questions: [
            {
                question: "`__init__` metodu ne zaman çağrılır?",
                options: [
                    "Sınıf tanımlandığında",
                    "Nesne oluşturulduğunda",
                    "Program bittiğinde",
                    "Metod çağrıldığında"
                ],
                correct: 1
            },
            {
                question: "`super()` fonksiyonu ne işe yarar?",
                options: [
                    "Parent (üst) sınıfı çağırır",
                    "Sınıfı siler",
                    "Nesneyi kopyalar",
                    "Hata verir"
                ],
                correct: 0
            },
            {
                question: "Class variable ve instance variable farkı nedir?",
                options: [
                    "Fark yoktur",
                    "Class variable tüm nesneler için ortaktır, instance variable her nesne için ayrıdır",
                    "Instance variable daha hızlıdır",
                    "Class variable daha güvenlidir"
                ],
                correct: 1
            },
            {
                question: "`@classmethod` decorator ne işe yarar?",
                options: [
                    "Sınıf metodu oluşturur (cls parametresi alır)",
                    "Nesne metodu oluşturur",
                    "Static metod oluşturur",
                    "Hiçbir şey yapmaz"
                ],
                correct: 0
            },
            {
                question: "`@staticmethod` decorator ne işe yarar?",
                options: [
                    "Sınıfa veya nesneye bağlı olmayan metod oluşturur",
                    "Sınıf metodu oluşturur",
                    "Nesne metodu oluşturur",
                    "Hiçbir şey yapmaz"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 7,
        fileName: "decorator_functions.py",
        topic: "Decorators",
        questions: [
            {
                question: "Decorator ne işe yarar?",
                options: [
                    "Fonksiyonu siler",
                    "Fonksiyona özellik ekler (önce/sonra işlem yapar)",
                    "Fonksiyonu yavaşlatır",
                    "Fonksiyonu kopyalar"
                ],
                correct: 1
            },
            {
                question: "`@decorator` sembolü nerede kullanılır?",
                options: [
                    "Fonksiyon içinde",
                    "Fonksiyon üstünde",
                    "Fonksiyon altında",
                    "Hiçbir yerde"
                ],
                correct: 1
            },
            {
                question: 'Aşağıdaki decorator ne yapar?\n```python\n@basit_decorator\ndef selamla():\n    print("Merhaba, dünya!")\n```',
                options: [
                    "selamla fonksiyonunu siler",
                    "selamla fonksiyonunu süsler (önce/sonra mesaj yazdırır)",
                    "selamla fonksiyonunu kopyalar",
                    "Hata verir"
                ],
                correct: 1
            },
            {
                question: "`*args` ve `**kwargs` decorator'da neden kullanılır?",
                options: [
                    "Hız için",
                    "Değişken sayıda argüman kabul etmek için",
                    "Güvenlik için",
                    "Zorunlu olduğu için"
                ],
                correct: 1
            },
            {
                question: "Parametreli decorator kaç seviye iç içe fonksiyon gerektirir?",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                correct: 2
            }
        ]
    },
    {
        id: 8,
        fileName: "deneme.py",
        topic: "List Comprehension",
        questions: [
            {
                question: "Aşağıdaki list comprehension ne yapar?\n```python\n[i*2 for i in sayilar]\n```",
                options: [
                    "Her elemanı 2 ile toplar",
                    "Her elemanı 2 ile çarpar",
                    "Her elemanı 2'ye böler",
                    "Hata verir"
                ],
                correct: 1
            },
            {
                question: "`[i for i in range(12) if i%2==0]` kaç eleman üretir?",
                options: [
                    "5",
                    "6",
                    "12",
                    "7"
                ],
                correct: 1
            },
            {
                question: "Ternary operator (koşullu ifade) nasıl yazılır?",
                options: [
                    'if x > 0 then "pozitif" else "negatif"',
                    '"pozitif" if x > 0 else "negatif"',
                    'x > 0 ? "pozitif" : "negatif"',
                    'if (x > 0) "pozitif" else "negatif"'
                ],
                correct: 1
            },
            {
                question: "Lambda fonksiyonu kaç satırlık olabilir?",
                options: [
                    "Sınırsız",
                    "Tek satır",
                    "İki satır",
                    "Üç satır"
                ],
                correct: 1
            },
            {
                question: "`map(lambda x: x**2, [1, 2, 3])` ne döndürür?",
                options: [
                    "[1, 4, 9]",
                    "map objesi",
                    "14",
                    "Hata verir"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 9,
        fileName: "generator.py",
        topic: "Generators",
        questions: [
            {
                question: "Generator fonksiyonlarda hangi keyword kullanılır?",
                options: [
                    "return",
                    "yield",
                    "generate",
                    "produce"
                ],
                correct: 1
            },
            {
                question: "`yield` ifadesi fonksiyonu nasıl etkiler?",
                options: [
                    "Fonksiyonu bitirir",
                    "Fonksiyonu duraklatır ve kaldığı yerden devam eder",
                    "Fonksiyonu hızlandırır",
                    "Hiçbir etkisi yoktur"
                ],
                correct: 1
            },
            {
                question: "Generator'ların avantajı nedir?",
                options: [
                    "Daha hızlıdır",
                    "Bellek tasarrufu sağlar (lazy evaluation)",
                    "Daha güvenlidir",
                    "Daha kolay yazılır"
                ],
                correct: 1
            },
            {
                question: "Aşağıdaki kod ne yapar?\n```python\ndef fib(limit):\n    a, b = 0, 1\n    while a < limit:\n        yield a\n        a, b = b, a+b\n```",
                options: [
                    "Fibonacci serisini liste olarak döndürür",
                    "Fibonacci serisini generator olarak üretir",
                    "Hata verir",
                    "Sadece ilk sayıyı döndürür"
                ],
                correct: 1
            },
            {
                question: "Generator expression nasıl oluşturulur?",
                options: [
                    "[] ile",
                    "() ile",
                    "{} ile",
                    "<> ile"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 10,
        fileName: "iterator.py",
        topic: "Iterators",
        questions: [
            {
                question: "Iterator sınıfında hangi metodlar zorunludur?",
                options: [
                    "__init__ ve __str__",
                    "__iter__ ve __next__",
                    "__get__ ve __set__",
                    "__enter__ ve __exit__"
                ],
                correct: 1
            },
            {
                question: "`next()` fonksiyonu iterator bittiğinde ne yapar?",
                options: [
                    "None döndürür",
                    "StopIteration hatası fırlatır",
                    "False döndürür",
                    "-1 döndürür"
                ],
                correct: 1
            },
            {
                question: "Iterator ve Generator arasındaki fark nedir?",
                options: [
                    "Generator daha hızlıdır",
                    "Generator yield kullanır ve otomatik iterator oluşturur",
                    "Fark yoktur",
                    "Iterator daha iyidir"
                ],
                correct: 1
            },
            {
                question: "`iter([1, 2, 3])` ne döndürür?",
                options: [
                    "[1, 2, 3]",
                    "List iterator objesi",
                    "1",
                    "Hata verir"
                ],
                correct: 1
            },
            {
                question: "Aşağıdaki Fibonacci iterator'ı doğru mu?\n```python\nclass Fibonacci:\n    def __init__(self, max):\n        self.max = max\n        self.a = 0\n        self.b = 1\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.a > self.max:\n            raise StopIteration\n        current = self.a\n        self.a, self.b = self.b, self.a + self.b\n        return current\n```",
                options: [
                    "Evet, doğru",
                    "Hayır, __iter__ yanlış",
                    "Hayır, __next__ yanlış",
                    "Hayır, __init__ yanlış"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 11,
        fileName: "multithread.py",
        topic: "Multithreading",
        questions: [
            {
                question: "Thread oluşturmak için hangi modül kullanılır?",
                options: [
                    "multiprocessing",
                    "threading",
                    "asyncio",
                    "concurrent"
                ],
                correct: 1
            },
            {
                question: "`thread.join()` ne işe yarar?",
                options: [
                    "Thread'i başlatır",
                    "Thread'in bitmesini bekler",
                    "Thread'i durdurur",
                    "Thread'i siler"
                ],
                correct: 1
            },
            {
                question: "Thread'ler aynı _______ içinde çalışır?",
                options: [
                    "CPU",
                    "Process (bellek alanı)",
                    "Dosya",
                    "Klasör"
                ],
                correct: 1
            },
            {
                question: "Aşağıdaki kodda kaç thread oluşturulur?\n```python\nt1 = threading.Thread(target=calculate_square, args=(sayilar,))\nt2 = threading.Thread(target=calculate_cube, args=(sayilar,))\nt1.start()\nt2.start()\n```",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                correct: 1
            },
            {
                question: "`args=(sayilar,)` neden tuple olarak yazılır?",
                options: [
                    "Zorunlu değil",
                    "Python tuple olarak bekler, tek elemanlı tuple için virgül gerekir",
                    "Daha hızlıdır",
                    "Daha güvenlidir"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 12,
        fileName: "multiprocess.py",
        topic: "Multiprocessing",
        questions: [
            {
                question: "Process oluşturmak için hangi modül kullanılır?",
                options: [
                    "threading",
                    "multiprocessing",
                    "asyncio",
                    "concurrent"
                ],
                correct: 1
            },
            {
                question: '`if __name__ == "__main__":` neden kullanılır?',
                options: [
                    "Zorunlu değil",
                    "Multiprocessing'de sonsuz döngüyü önlemek için",
                    "Daha hızlıdır",
                    "Daha güvenlidir"
                ],
                correct: 1
            },
            {
                question: "Process'ler ayrı _______ kullanır?",
                options: [
                    "Thread",
                    "Bellek alanı (memory)",
                    "Dosya",
                    "Klasör"
                ],
                correct: 1
            },
            {
                question: "`multiprocessing.cpu_count()` ne döndürür?",
                options: [
                    "RAM miktarı",
                    "CPU sayısı",
                    "Process sayısı",
                    "Thread sayısı"
                ],
                correct: 1
            },
            {
                question: "Thread ve Process arasındaki temel fark nedir?",
                options: [
                    "Fark yoktur",
                    "Process'ler ayrı bellek kullanır, Thread'ler aynı belleği paylaşır",
                    "Thread daha yavaştır",
                    "Process daha güvensizdir"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 13,
        fileName: "nested_functions.py",
        topic: "İç İçe Fonksiyonlar",
        questions: [
            {
                question: "Nested function (iç içe fonksiyon) ne demektir?",
                options: [
                    "İki fonksiyonu toplamak",
                    "Bir fonksiyonun içinde başka bir fonksiyon tanımlamak",
                    "Fonksiyonu kopyalamak",
                    "Fonksiyonu silmek"
                ],
                correct: 1
            },
            {
                question: "Aşağıdaki kodda `square(5)` ne döndürür?\n```python\ndef power_calculator(exponent):\n    def calculate_power(number):\n        return number ** exponent\n    return calculate_power\n\nsquare = power_calculator(2)\n```",
                options: [
                    "2",
                    "5",
                    "25",
                    "Hata verir"
                ],
                correct: 2
            },
            {
                question: "Closure nedir?",
                options: [
                    "Fonksiyonu silmek",
                    "İç fonksiyonun dış fonksiyonun değişkenlerini hatırlaması",
                    "Fonksiyonu kopyalamak",
                    "Hata vermek"
                ],
                correct: 1
            },
            {
                question: "`return calculate_power` neden `return calculate_power()` değil?",
                options: [
                    "Hata verir",
                    "Fonksiyonun kendisini döndürmek için (çağırmadan)",
                    "Daha hızlıdır",
                    "Zorunlu"
                ],
                correct: 1
            },
            {
                question: "Nested function'lar neden kullanılır?",
                options: [
                    "Kodu yavaşlatmak için",
                    "Kodu kapsüllemek ve organize etmek için",
                    "Bellek tasarrufu için",
                    "Zorunlu olduğu için"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 14,
        fileName: "recursive.py",
        topic: "Özyinelemeli Fonksiyonlar",
        questions: [
            {
                question: "Recursive fonksiyonun zorunlu parçası nedir?",
                options: [
                    "Loop",
                    "Base case (taban durumu)",
                    "Lambda",
                    "Decorator"
                ],
                correct: 1
            },
            {
                question: "`factorial(5)` kaç kez çağrılır?",
                options: [
                    "5",
                    "6",
                    "4",
                    "10"
                ],
                correct: 1
            },
            {
                question: "Fibonacci(5) değeri nedir?",
                options: [
                    "3",
                    "5",
                    "8",
                    "13"
                ],
                correct: 1
            },
            {
                question: "Base case olmazsa ne olur?",
                options: [
                    "Sonsuz döngü (stack overflow)",
                    "Hata vermez",
                    "Daha hızlı çalışır",
                    "Hiçbir şey olmaz"
                ],
                correct: 0
            },
            {
                question: "Palindrom kontrolünde hangi karakterler karşılaştırılır?",
                options: [
                    "İlk ve son",
                    "Ortadakiler",
                    "Tüm karakterler",
                    "Sadece ilk karakter"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 15,
        fileName: "ödev1.py",
        topic: "Threading Uygulaması",
        questions: [
            {
                question: "`global running` ne işe yarar?",
                options: [
                    "Değişkeni siler",
                    "Tüm thread'lerin erişebileceği kontrol değişkeni",
                    "Değişkeni kopyalar",
                    "Hata verir"
                ],
                correct: 1
            },
            {
                question: "`time.sleep(1)` ne yapar?",
                options: [
                    "Programı bitirir",
                    "1 saniye bekler",
                    "1 milisaniye bekler",
                    "Hata verir"
                ],
                correct: 1
            },
            {
                question: "Ardışık ve paralel çalışma arasındaki fark nedir?",
                options: [
                    "Fark yoktur",
                    "Paralel çalışmada görevler aynı anda çalışır",
                    "Ardışık daha hızlıdır",
                    "Paralel daha yavaştır"
                ],
                correct: 1
            },
            {
                question: "`thread.join()` neden kullanılır?",
                options: [
                    "Thread'i başlatmak için",
                    "Thread'in bitmesini beklemek için",
                    "Thread'i durdurmak için",
                    "Thread'i silmek için"
                ],
                correct: 1
            },
            {
                question: "`random.choice([True, False])` ne yapar?",
                options: [
                    "Her zaman True döndürür",
                    "Rastgele True veya False döndürür",
                    "Her zaman False döndürür",
                    "Hata verir"
                ],
                correct: 1
            }
        ]
    }
];

// ===============================================
// State Management
// ===============================================
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];

// ===============================================
// DOM Elements
// ===============================================
const quizSelection = document.getElementById('quiz-selection');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionCard = document.getElementById('question-card');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const backToMenuBtn = document.getElementById('back-to-menu');
const backToMenuResultsBtn = document.getElementById('back-to-menu-results');
const showAnswersBtn = document.getElementById('show-answers-btn');
const answerKey = document.getElementById('answer-key');

// ===============================================
// Initialize Quiz Selection
// ===============================================
function initializeQuizSelection() {
    quizSelection.innerHTML = '';
    
    quizData.forEach(quiz => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = `
            <h3>📄 ${quiz.fileName}</h3>
            <span class="topic">${quiz.topic}</span>
            <div class="info">
                <span>📝 ${quiz.questions.length} Soru</span>
            </div>
        `;
        card.addEventListener('click', () => startQuiz(quiz));
        quizSelection.appendChild(card);
    });
}

// ===============================================
// Start Quiz
// ===============================================
function startQuiz(quiz) {
    currentQuiz = quiz;
    currentQuestionIndex = 0;
    userAnswers = new Array(quiz.questions.length).fill(null);
    
    // Update UI
    document.getElementById('current-quiz-title').textContent = quiz.fileName;
    document.getElementById('current-quiz-topic').textContent = quiz.topic;
    
    // Show quiz container
    quizSelection.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    
    // Render first question
    renderQuestion();
}

// ===============================================
// Render Question
// ===============================================
function renderQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const totalQuestions = currentQuiz.questions.length;
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('current-question-number').textContent = `Soru ${currentQuestionIndex + 1}/${totalQuestions}`;
    document.getElementById('progress-percentage').textContent = `${Math.round(progress)}%`;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    
    // Format question text (handle code blocks)
    let formattedQuestion = question.question;
    if (formattedQuestion.includes('```python')) {
        const parts = formattedQuestion.split('```python');
        const beforeCode = parts[0];
        const afterSplit = parts[1].split('```');
        const code = afterSplit[0];
        const afterCode = afterSplit[1] || '';
        
        questionText.innerHTML = `
            ${beforeCode}
            <div class="code-block">${code.trim()}</div>
            ${afterCode}
        `;
    } else {
        questionText.innerHTML = formattedQuestion.replace(/`([^`]+)`/g, '<code>$1</code>');
    }
    
    // Render options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        const label = String.fromCharCode(65 + index); // A, B, C, D
        optionDiv.innerHTML = `
            <div class="option-label">${label}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionDiv.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update button states
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        finishBtn.classList.add('hidden');
    }
    
    // Animate card
    questionCard.style.animation = 'none';
    setTimeout(() => {
        questionCard.style.animation = 'slideIn 0.3s ease';
    }, 10);
}

// ===============================================
// Select Option
// ===============================================
function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    
    // Update visual selection
    const options = optionsContainer.querySelectorAll('.option');
    options.forEach((opt, i) => {
        if (i === index) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}

// ===============================================
// Navigation
// ===============================================
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
});

finishBtn.addEventListener('click', () => {
    showResults();
});

backToMenuBtn.addEventListener('click', () => {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    quizSelection.classList.remove('hidden');
});

backToMenuResultsBtn.addEventListener('click', () => {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    quizSelection.classList.remove('hidden');
    answerKey.classList.add('hidden');
});

// ===============================================
// Show Results
// ===============================================
function showResults() {
    // Calculate score
    let correctCount = 0;
    currentQuiz.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const incorrectCount = totalQuestions - correctCount;
    
    // Update results UI
    document.getElementById('score-display').textContent = `${correctCount}/${totalQuestions}`;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('incorrect-count').textContent = incorrectCount;
    document.getElementById('percentage').textContent = `${percentage}%`;
    
    // Set icon based on score
    const resultsIcon = document.getElementById('results-icon');
    if (percentage >= 80) {
        resultsIcon.textContent = '🎉';
    } else if (percentage >= 60) {
        resultsIcon.textContent = '👍';
    } else {
        resultsIcon.textContent = '💪';
    }
    
    // Show results container
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    answerKey.classList.add('hidden');
}

// ===============================================
// Show Answer Key
// ===============================================
showAnswersBtn.addEventListener('click', () => {
    if (answerKey.classList.contains('hidden')) {
        const answerList = document.getElementById('answer-list');
        answerList.innerHTML = '';
        
        currentQuiz.questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            const correctAnswer = question.correct;
            const isCorrect = userAnswer === correctAnswer;
            
            const answerItem = document.createElement('div');
            answerItem.className = `answer-item ${isCorrect ? 'right' : 'wrong'}`;
            
            const labels = ['A', 'B', 'C', 'D'];
            
            answerItem.innerHTML = `
                <span class="answer-number">Soru ${index + 1}</span>
                <div class="answer-comparison">
                    <span class="answer-badge correct-answer">Doğru: ${labels[correctAnswer]}</span>
                    ${!isCorrect && userAnswer !== null ? `<span class="answer-badge your-answer">Senin: ${labels[userAnswer]}</span>` : ''}
                    ${userAnswer === null ? `<span class="answer-badge your-answer">Cevap verilmedi</span>` : ''}
                </div>
            `;
            
            answerList.appendChild(answerItem);
        });
        
        answerKey.classList.remove('hidden');
        showAnswersBtn.textContent = '🔼 Cevapları Gizle';
    } else {
        answerKey.classList.add('hidden');
        showAnswersBtn.textContent = '📋 Cevapları Göster';
    }
});

// ===============================================
// Initialize App
// ===============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeQuizSelection();
});
