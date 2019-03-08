public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        string linha = "";
        string separador = "";
        int porcentagem = 0;
        string nick = "";
        static string refer = "";
        static string companhia = "Supervisores de Promoção";
        string[] bbcode = { "[color=#ff0000][b]Meus dados:[/b][/color]", "[b]Companhia/Subcompanhia: [/b]" + companhia, "[color=#ff0000][b]Dados do policial contemplado:[/b][/color]\n\n", "[b]Nick: [/b]", "\n[b]Número de medalhas: [/b]", "\n[b]Motivo: [/b]" };
        //string parte1 = "[color=#ff0000][b]Meus dados:[/b][/color]";
        //string parte2 = "[b]Companhia/Subcompanhia: [/b]" + companhia;
        //string parte5 = "[color=#ff0000][b]Dados do policial contemplado:[/b][/color]\n\n";
        //string parte6 = "[b]Nick: [/b]";
        //string parte7 = "\n[b]Número de medalhas: [/b]";
        //string parte8 = "\n[b]Motivo: [/b]";
        private void button1_Click(object sender, EventArgs e)
        {
            string mynick = txtNick.Text;
            string mypatente = txtTAG.Text;
            string meunick = string.Format("[b]Nick:[/b] {0} \n[b]TAG: {2}[/b] \n[b]Patente: {1}[/b] \n", mynick, mypatente, myTAG.Text);
            refer = txtReferencia.Text;
            string sRef = "[b]Semana de rererência: [/b]" + refer;
            int i = 0;
            int c = 0;
            lista2.Text += bbcode[1] + "\n\n" + meunick + bbcode[2] + "\n" + sRef + "\n" + bbcode[5] + "\n";
            while (i <= lista1.Lines.Length)
            {
                try
                {
                    linha = lista1.Lines[i];
                    linha = linha.Replace("Melhores Supervisores da semana:", "");
                    linha = linha.Replace("Supervisores na média/acima da média:", "");
                    linha = linha.Replace("%", "");
                    nick = linha.Substring(0, linha.IndexOf("("));
                    separador = linha.Substring(linha.IndexOf(" -") + 2);
                    porcentagem = int.Parse(separador);

                    //  
                    if (linha == "Supervisores em Caso Especial:")
                    {
                        break;
                    }
                    if (c <= 1)
                    {
                        lista2.Text += bbcode[6] + nick + bbcode[7] + "[color=green][b]15[/b][/color]" + bbcode[8] + "Trabalho realizado na companhia dos supervisores\n\n";
                        c++;
                    }
                    else
                    {
                        lista2.Text += bbcode[6] + nick + bbcode[7] + "[color=green][b]10[/b][/color]" + bbcode[8] + "Trabalho realizado na companhia dos supervisores\n\n";
                    }
                }
                catch { }
                i++;
            }
            Properties.Settings.Default.Nick = txtNick.Text;
            Properties.Settings.Default.TAG = myTAG.Text;
            Properties.Settings.Default.Patente = txtTAG.Text;
            Properties.Settings.Default.Save();
            Clipboard.SetText(lista2.Text);
            string cp = "BBCode copiado para a área de tranferência, deseja abrir os requerimentos do CRH?";
            DialogResult req = MessageBox.Show(cp, "", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            string link = "http://www.policiarcc.com/f185-requerimentos-promocoes-rebaixamentos-desligamentos-e-gratificacoes";
            if (req == DialogResult.Yes)
            { System.Diagnostics.Process.Start(link); }

        }

        private void label1_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void label8_Click(object sender, EventArgs e)
        {
            WindowState = FormWindowState.Minimized;
        }

        private void configOk(object sender, EventArgs e)
        {
            txtNick.Text = Properties.Settings.Default.Nick;
            myTAG.Text = Properties.Settings.Default.TAG;
            txtTAG.Text = Properties.Settings.Default.Patente;
        }
    }
}