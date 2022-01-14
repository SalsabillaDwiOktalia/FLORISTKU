
import 'package:toko_bunga_flutter/ui/login.dart';
import 'package:toko_bunga_flutter/ui/startup.dart';
import 'package:toko_bunga_flutter/ui/test.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Floristku',
        theme: ThemeData(
          primarySwatch: Colors.pink,
        ),
        debugShowCheckedModeBanner: false,
        home: StartUp()
    );
  }
}